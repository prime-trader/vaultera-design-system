import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// Get the root element from the HTML
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("Root element with id 'root' not found in the document.")
}

// Initialize React's root
const root = ReactDOM.createRoot(rootElement)

// Render the application
root.render(
  <StrictMode>
    <div>Welcome to Vaultra UI library</div>
  </StrictMode>
)
