import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    viteCompression({
      algorithm: 'brotliCompress', // Puedes cambiar a 'gzip' si lo prefieres
      ext: '.br', // Extensión para los archivos comprimidos con Brotli (.br)
      threshold: 1024, // Comprime archivos mayores a 1KB
      compressionOptions: { level: 11 }, // Nivel de compresión para Brotli
    }),
  ],
  base: "/urbanouse/",
});
