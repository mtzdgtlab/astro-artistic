import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      ignored: ['!**/public/assets/css/**']
    }
  }
});