import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function convertPngToWebP() {
  const lottieAssetsDir = path.join(__dirname, '..', 'public', 'lottie-assets');
  
  // Find all PNG files
  const findPngFiles = (dir) => {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...findPngFiles(fullPath));
      } else if (item.endsWith('.png')) {
        files.push(fullPath);
      }
    }
    
    return files;
  };
  
  const pngFiles = findPngFiles(lottieAssetsDir);
  
  console.log(`Found ${pngFiles.length} PNG files to convert`);
  
  for (const pngFile of pngFiles) {
    try {
      const webpFile = pngFile.replace('.png', '.webp');
      
      await sharp(pngFile)
        .webp({ quality: 80, effort: 6 })
        .toFile(webpFile);
      
      console.log(`Converted: ${path.basename(pngFile)} -> ${path.basename(webpFile)}`);
      
      // Delete the original PNG file
      fs.unlinkSync(pngFile);
      console.log(`Deleted: ${path.basename(pngFile)}`);
      
    } catch (error) {
      console.error(`Error converting ${pngFile}:`, error.message);
    }
  }
  
  console.log('Conversion complete!');
}

convertPngToWebP().catch(console.error);
