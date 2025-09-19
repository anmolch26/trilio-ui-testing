#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if imagemin is installed
function checkImageminInstalled() {
  try {
    require.resolve('imagemin');
    require.resolve('imagemin-webp');
    require.resolve('imagemin-pngquant');
    require.resolve('imagemin-mozjpeg');
    return true;
  } catch (e) {
    return false;
  }
}

async function optimizeImages() {
  if (!checkImageminInstalled()) {
    console.log('Installing image optimization dependencies...');
    execSync('npm install --save-dev imagemin imagemin-webp imagemin-pngquant imagemin-mozjpeg imagemin-svgo', { stdio: 'inherit' });
  }

  const imagemin = require('imagemin');
  const imageminWebp = require('imagemin-webp');
  const imageminPngquant = require('imagemin-pngquant');
  const imageminMozjpeg = require('imagemin-mozjpeg');

  console.log('🖼️  Starting image optimization...');

  // Optimize images in src/assets
  const srcFiles = await imagemin(['src/assests/*.{jpg,jpeg,png}'], {
    destination: 'src/assests/optimized',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminWebp({ quality: 80 })
    ]
  });

  // Optimize images in public directory
  const publicFiles = await imagemin(['public/**/*.{jpg,jpeg,png}'], {
    destination: 'public/optimized',
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminWebp({ quality: 80 })
    ]
  });

  console.log(`✅ Optimized ${srcFiles.length + publicFiles.length} images`);
  
  // Generate a report of large images
  console.log('\n📊 Large images that need attention:');
  const largeImages = [];
  
  function checkDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    
    files.forEach(file => {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory() && file.name !== 'node_modules' && file.name !== '.git') {
        checkDirectory(fullPath);
      } else if (file.isFile() && /\.(png|jpg|jpeg)$/i.test(file.name)) {
        const stats = fs.statSync(fullPath);
        const sizeInMB = stats.size / (1024 * 1024);
        
        if (sizeInMB > 0.5) { // Files larger than 500KB
          largeImages.push({
            path: fullPath,
            size: sizeInMB.toFixed(2) + ' MB'
          });
        }
      }
    });
  }
  
  checkDirectory('./src');
  checkDirectory('./public');
  
  if (largeImages.length > 0) {
    console.log('\n⚠️  Large images found (>500KB):');
    largeImages.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
    largeImages.forEach(img => {
      console.log(`  ${img.path} - ${img.size}`);
    });
    
    console.log('\n💡 Recommendations:');
    console.log('  1. Convert large PNGs to WebP format');
    console.log('  2. Compress images using tools like TinyPNG');
    console.log('  3. Use responsive images with different sizes');
    console.log('  4. Consider lazy loading for non-critical images');
  }
}

if (require.main === module) {
  optimizeImages().catch(console.error);
}

module.exports = optimizeImages;
