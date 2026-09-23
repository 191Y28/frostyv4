import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

const rootDir = process.cwd();

function copyAssetsPlugin() {
  return {
    name: 'copy-game-assets',
    closeBundle() {
      // Copy entire assets/ tree (htmls, covers, ruffle, swfs) into dist/assets/
      const srcDir = path.resolve(rootDir, 'assets');
      const destDir = path.resolve(rootDir, 'dist/assets');
      if (fs.existsSync(srcDir)) {
        fs.cpSync(srcDir, destDir, { recursive: true });
        console.log('[build] Successfully copied assets/ to dist/assets/');
      }

      // Ensure .nojekyll exists in dist/ for GitHub Pages static serving
      const distDir = path.resolve(rootDir, 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.resolve(distDir, '.nojekyll'), '');
        console.log('[build] Created .nojekyll in dist/ for GitHub Pages compatibility');

        // Copy root helper cl*.html files and standalone game html files if present
        const rootFiles = fs.readdirSync(rootDir);
        for (const file of rootFiles) {
          if (file.endsWith('.html') && file !== 'index.html') {
            fs.copyFileSync(path.resolve(rootDir, file), path.resolve(distDir, file));
            console.log(`[build] Copied game/helper file ${file} to dist/`);
          }
        }
      }
    }
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [copyAssetsPlugin()],
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
