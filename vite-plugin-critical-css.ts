import type { Plugin } from 'vite';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
// @ts-ignore - Critters types issue
import Critters from 'critters';

export function criticalCSS(): Plugin {
  return {
    name: 'vite-plugin-critical-css',
    apply: 'build',
    async writeBundle(options, bundle) {
      if (options.dir) {
        const htmlFile = join(options.dir, 'index.html');
        const cssFiles: string[] = [];

        // Find all CSS files in the bundle
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (chunk.type === 'asset' && fileName.endsWith('.css')) {
            cssFiles.push(join(options.dir, fileName));
          }
        }

        if (cssFiles.length > 0 && cssFiles[0]) {
          try {
            const html = readFileSync(htmlFile, 'utf-8');
            const mainCSSFile = cssFiles[0];
            const css = readFileSync(mainCSSFile, 'utf-8');

            // Initialize Critters
            const critters = new Critters({
              path: options.dir,
              external: true,
              inlineThreshold: 0,
              minimumExternalSize: 0,
              preload: 'swap',
              noscriptFallback: true,
              inlineFonts: false,
            });

            // Process HTML with critical CSS
            const processedHtml = await critters.process(html);

            // Make remaining CSS load asynchronously
            let finalHtml = processedHtml;
            const cssFileName = mainCSSFile.replace(options.dir + '/', '');
            
            // Replace CSS link with async loading pattern
            const cssLinkRegex = new RegExp(
              `<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']*${cssFileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^"']*)["'][^>]*>`,
              'gi'
            );

            finalHtml = finalHtml.replace(cssLinkRegex, (match: string, href: string) => {
              // If it's not already converted to preload, convert it
              if (!match.includes('rel="preload"')) {
                return `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
              }
              return match;
            });

            writeFileSync(htmlFile, finalHtml);
            console.log('✓ Critical CSS extracted and inlined');
          } catch (error) {
            console.warn('⚠ Critical CSS extraction failed:', error);
          }
        }
      }
    },
  };
}

