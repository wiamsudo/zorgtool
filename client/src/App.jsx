// filepath: c:\Users\mateo\OneDrive - Onderwijsgroep Tilburg\Documenten\School\LEEERJAAR3\challenge week\project\client\src\App.jsx
import React from "react";
// import './App.css'; // Ensure App.css is imported either here or in index.jsx

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <p>Sidebar Content</p>
        {/* Add more boxes for the 1/3rd section here */}
      </div>
      <div className="chat-area">
        <p>Chatbot Area</p>
        {/* We will integrate ChatUI.jsx here later */}
      </div>
    </div>
  );
}

export default App;
