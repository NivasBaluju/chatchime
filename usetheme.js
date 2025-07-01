import { useState, useEffect, createContext, useContext } from 'react';  // Import React hooks and context

const ThemeContext = createContext();  // Create context for theme state management

export const ThemeProvider = ({ children }) => {  // Theme provider component
  const [theme, setTheme] = useState(() => {       // Initialize theme state
    const savedTheme = localStorage.getItem('theme');  // Check if user has saved theme preference
    return savedTheme || 'light';                      // Default to light theme if no saved preference
  });

  useEffect(() => {  // Effect to sync theme with localStorage and DOM
    localStorage.setItem('theme', theme);           // Save theme preference to localStorage
    if (theme === 'dark') {                        // If dark theme is selected
      document.documentElement.classList.add('dark');     // Add 'dark' class to HTML element
    } else {                                       // If light theme is selected
      document.documentElement.classList.remove('dark');  // Remove 'dark' class from HTML element
    }
  }, [theme]);  // Run effect whenever theme changes

  const toggleTheme = () => {  // Function to toggle between light and dark themes
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');  // Switch theme
  };

  return (  // Provide theme context to child components
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {   
const context = useContext(ThemeContext);  
  if (!context) {  // If hook is used outside ThemeProvider
    throw new Error('useTheme must be used within a ThemeProvider');  // Throw helpful error
  }
  return context;  
};
