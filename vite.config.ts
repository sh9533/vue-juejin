import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${resolve(__dirname, './src/assets/less/var.less')}";`,
        math: 'always',
      }
    }
  },
  plugins: [vue()]
})
