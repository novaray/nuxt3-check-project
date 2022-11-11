/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('el-')
        }
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    deps: {
      inline: ['element-plus']
    }
  },
});
