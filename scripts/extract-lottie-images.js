import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to extract base64 images from Lottie JSON and save as WebP
function extractLottieImages() {
  const lottieFiles = [
    {
      input: 'src/assests/dark-space.json',
      outputDir: 'public/lottie-assets/dark-space/',
      name: 'dark-space'
    },
    {
      input: 'src/assests/Lottie/Siri Animation.json',
      outputDir: 'public/lottie-assets/siri/',
      name: 'siri'
    }
  ];

  lottieFiles.forEach(({ input, outputDir, name }) => {
    try {
      // Read the Lottie JSON file
      const lottieData = JSON.parse(fs.readFileSync(input, 'utf8'));
      
      // Create output directory
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Extract and save base64 images
      if (lottieData.assets) {
        lottieData.assets.forEach((asset, index) => {
          if (asset.p && asset.p.startsWith('data:image/')) {
            // Extract base64 data
            const base64Data = asset.p.split(',')[1];
            const mimeType = asset.p.split(';')[0].split(':')[1];
            
            // Convert to WebP filename
            const webpFilename = `image_${index}.webp`;
            
            // Save as PNG first (will be converted to WebP later)
            const pngFilename = `image_${index}.png`;
            const pngPath = path.join(outputDir, pngFilename);
            
            fs.writeFileSync(pngPath, base64Data, 'base64');
            
            // Update the asset to reference external WebP file
            asset.p = `/lottie-assets/${name}/${webpFilename}`;
            asset.u = `/lottie-assets/${name}/`;
            
            console.log(`Extracted ${pngFilename} from ${input}`);
            console.log(`Note: Convert ${pngFilename} to WebP format for better performance`);
          }
        });
      }

      // Save updated Lottie JSON
      const outputPath = input.replace('.json', '-optimized.json');
      fs.writeFileSync(outputPath, JSON.stringify(lottieData, null, 2));
      
      console.log(`Created optimized Lottie file: ${outputPath}`);
      
    } catch (error) {
      console.error(`Error processing ${input}:`, error.message);
    }
  });
}

// Run the extraction
extractLottieImages();
