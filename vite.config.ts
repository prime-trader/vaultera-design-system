import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Entry point for your library (index.tsx where your components are exported)
      entry: path.resolve(__dirname, 'src/index.tsx'),
      // Name of the library (this is the global variable if the library is loaded via <script>)
      name: 'DesignSystem',
      // The output filename pattern for the different formats
      fileName: (format) => `design-system.${format}.js`
    },
    rollupOptions: {
      // Externalize dependencies you don't want to include in the build
      external: ['react', 'react-dom'],
      output: {
        // If externalized, provide global variable names for use in browser
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@icons': path.resolve(__dirname, 'src/assets/icons')
    }
  }
})
