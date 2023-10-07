import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { copy } from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(),
  copy({
      targets: [
        // Copy the specific file(s) you want to preserve in the "dist" directory.
        { src: 'path/to/output.css', dest: 'dist' },
        // You can add more copy targets for other files if needed.
      ],
      // Adjust other options as needed.
    }),],
})
