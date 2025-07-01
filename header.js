import { useState } from 'react';           // Import useState for component state
import { useTheme } from '../../hooks/useTheme';  // Import theme hook

export const Header = () => {  // Header component definition
  const { theme, toggleTheme } = useTheme();  // Get theme state and toggle function
  const [user] = useState({  // Mock user data (in real app, this would come from authentication)
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    status: 'online'
  });

  return (  // Return header JSX
    <header className={`h-16 border-b flex items-center justify-between px-6 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-slate-800 border-slate-700'        // Dark theme styling
        : 'bg-white/80 backdrop-blur-md border-purple-100'  // Light theme with blur effect
    }`}>
      <div className="flex items-center space-x-3">  {/* Left side of header */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
          <span className="text-white font-bold text-lg">💬</span>  {/* App icon */}
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ChatChime  {/* App name with gradient text */}
        </h1>
      </div>

      <div className="flex items-center space-x-4">  {/* Right side of header */}
        <button
          onClick={toggleTheme}  // Theme toggle button
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
        >
          {theme === 'dark' ? '☀️' : '🌙'}  {/* Icon changes based on current theme */}
        </button>
        
        <div className="flex items-center space-x-3">  {/* User profile section */}
          <div className="text-right">
            <p className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {user.name}  {/* Display user name */}
            </p>
            <p className="text-xs text-green-500 flex items-center justify-end">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>  {/* Online status indicator */}
              {user.status}
            </p>
          </div>
          <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-purple-200">
            <img 
              src={user.avatar}   // User avatar image
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
