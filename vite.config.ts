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
