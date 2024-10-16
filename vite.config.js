import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.epicgames.dev', // 프록시할 API 서버
        changeOrigin: true, // 호스트 헤더 변경
        rewrite: (path) => path.replace(/^\/api/, ''), // 요청 경로 재작성
        secure: false,
      },
    },
    port: 5173,
    host: '0.0.0.0',
  },
  plugins: [react()],
});
