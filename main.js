import { createRoot } from 'react-dom/client'  // Import React 18's new createRoot API for rendering
import App from './App.js'                     // Import our main App component (note .js extension)
import './index.css'                          // Import global CSS styles including Tailwind

createRoot(document.getElementById("root")).render(<App />);  // Create React root and render App component
