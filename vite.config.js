import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    handlebars({
      partialDirectory: './src/templates/', // Шлях до папки з частковими шаблонами
    }),
  ],
  assetsInclude: ['**/*.hbs'], // Додаємо обробку hbs-файлів як assets
});
