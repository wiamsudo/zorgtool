// filepath: c:\Users\mateo\OneDrive - Onderwijsgroep Tilburg\Documenten\School\LEEERJAAR3\challenge week\project\client\src\App.jsx
import React from "react";
// import './App.css'; // Ensure App.css is imported either here or in index.jsx

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="menu"></div>
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
                <img src="/Upload.png" alt="Download" /> Download Samenvatting 24/04
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
                <img src="/Upload.png" alt="Download" /> Download Samenvatting 24/04
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
                <img src="/Upload.png" alt="Download" /> Download Samenvatting 24/04
              </a>
            </div>
          </div>
        </div>
        {/* Add more boxes for the 1/3rd section here */}
      </div>
      <div className="chat-area">
        <div className="top"></div>
        <div className="bottom"></div>
        {/* We will integrate ChatUI.jsx here later */}
      </div>
    </div>
  );
}

export default App;
