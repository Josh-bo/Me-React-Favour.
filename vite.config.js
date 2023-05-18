import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      assetFileNames: 'assets/[name].[ext]',
      chunkFileNames: 'assets/[name].[hash].js',
      entryFileNames: 'assets/[name].[hash].js',
      manualChunks(id){
        if(id.includes('node_module')){
          return 'vendor';
        }
      },
    },
  },
})
