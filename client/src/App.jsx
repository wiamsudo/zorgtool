import React, { useState } from "react";
import "./App.css";
import ChatUI from "./components/ChatUI";
import Dashboard from "./Dashboard";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(false); // Always set to false to go back
  };

  return (
    <div className="app-container">
      {showDashboard ? (
        <Dashboard onClose={toggleDashboard} /> // Pass the function as a prop
      ) : (
        <>
          <div className="sidebar">
            <div className="menu">
              {/* Dashboard button moved here */}
              <button
                onClick={() => setShowDashboard(!showDashboard)}
                className="dashboard-toggle-button"
              >
                {showDashboard ? "Sluit Dashboard" : "Open Dashboard"}
              </button>
            </div>
            <div className="box">
              <div className="profiel">
                <div className="profiel-foto"></div>
                <p>Christa Dohmen</p>
              </div>
              <div className="posts-container">
                <div className="post">
                  <div className="post-header">
                    <div className="profiel-foto-post"></div>
                    <p>Christa Dohmen</p>
                  </div>
                  <a
                    className="download"
                    href="/path/naar/bestand.pdf"
                    download="Samenvatting_24-04.pdf"
                  >
                    <img src="/Upload.png" alt="Download" /> Download
                    Samenvatting 24/04
                  </a>
                </div>
                <div className="post">
                  <div className="post-header">
                    <div className="profiel-foto-post"></div>
                    <p>Christa Dohmen</p>
                  </div>
                  <a
                    className="download"
                    href="/path/naar/bestand.pdf"
                    download="Samenvatting_24-04.pdf"
                  >
                    <img src="/Upload.png" alt="Download" /> Download
                    Samenvatting 24/04
                  </a>
                </div>
                <div className="post">
                  <div className="post-header">
                    <div className="profiel-foto-post"></div>
                    <p>Christa Dohmen</p>
                  </div>
                  <a
                    className="download"
                    href="/path/naar/bestand.pdf"
                    download="Samenvatting_24-04.pdf"
                  >
                    <img src="/Upload.png" alt="Download" /> Download
                    Samenvatting 24/04
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-area">
            <ChatUI />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
