import { useState } from 'react';                    // Import useState hook for component state
import { Header } from '../components/chat/Header';   // Import header component
import { Sidebar } from '../components/chat/Sidebar'; // Import sidebar navigation component
import { ChatArea } from '../components/chat/ChatArea'; // Import main chat area component
import { useTheme } from '../hooks/useTheme';        // Import custom theme hook

const Index = () => {  // Main page component for chat interface
  const [activeSection, setActiveSection] = useState('ConvoSpaces');  // Track which sidebar section is active
  const [selectedChat, setSelectedChat] = useState(null);             // Track which chat is currently selected
  const { theme } = useTheme();  // Get current theme (light or dark)

  return (  // Return JSX for the chat interface layout
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-slate-900'  // Dark theme background
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-mint-50'  // Light theme gradient background
    }`}>
      <Header />  {/* App header with logo and user info */}
      <div className="flex flex-1 overflow-hidden">  {/* Main content area */}
        <Sidebar 
          activeSection={activeSection}           // Pass active section state
          onSectionChange={setActiveSection}      // Pass function to change active section
          selectedChat={selectedChat}            // Pass selected chat state
          onChatSelect={setSelectedChat}         // Pass function to select a chat
        />
        <ChatArea 
          activeSection={activeSection}          // Pass active section to chat area
          selectedChat={selectedChat}           // Pass selected chat to chat area
        />
      </div>
    </div>
  );
};

export default Index;  // Export Index component
