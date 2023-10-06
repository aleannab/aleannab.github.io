import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcss from 'postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), postcss()],
  build: {
    rollupOptions: {
      // Specify entry points for your application here
      input: {
        main: './src/main.jsx', // Adjust the path to your entry file
      },
    },
  },
})
