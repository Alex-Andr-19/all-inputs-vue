import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    extensions: ['.js', '.json', '.vue'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "@/assets/styles/global.scss";
            @import "@/assets/styles/typography.scss";
            @import "@/assets/styles/transitions-names.scss";
        `,
      }
    }
  },
})
