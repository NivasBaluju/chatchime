import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import React Router for navigation
import { ThemeProvider } from "./hooks/useTheme";                // Import our custom theme context provider
import Index from "./pages/Index";                              // Import main chat page component
import NotFound from "./pages/NotFound";                        // Import 404 error page component

const App = () => (  // Main App component using arrow function syntax
  <ThemeProvider>    {/* Wrap entire app with theme context for dark/light mode */}
    <BrowserRouter>  {/* Enable client-side routing */}
      <Routes>       {/* Define all application routes */}
        <Route path="/" element={<Index />} />      {/* Home route shows chat interface */}
        <Route path="*" element={<NotFound />} />   {/* Catch-all route for 404 errors */}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;  // Export App component as default export
