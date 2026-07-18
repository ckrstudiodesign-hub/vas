import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        mainland: resolve(__dirname, 'mainland.html'),
        freezone: resolve(__dirname, 'freezone.html'),
        offshore: resolve(__dirname, 'offshore.html'),
        services: resolve(__dirname, 'services.html'),
        privacy: resolve(__dirname, 'privacy.html')
      }
    }
  }
});
