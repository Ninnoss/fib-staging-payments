import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/fib-staging-payments/',
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://fib.stage.fib.iq',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    watch: {
      usePolling: true,
    },
  },
});
