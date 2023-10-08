import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'; // Import tailwindcss as an ES module
import autoprefixer from 'autoprefixer'; // Import autoprefixer as an ES module


// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(),],
  css: {
    postcss: {
      plugins: [
        tailwindcss('./tailwind.config.js'), // Use the imported tailwindcss
        autoprefixer(), // Use the imported autoprefixer
      ],
      input: './src/input.css', // Specify the path to your input.css
    },
  },
  optimizeDeps: {
    optimizeDeps: {
    include: ['tailwindcss', 'autoprefixer'], // Include these packages for optimization
  },
  },
})
