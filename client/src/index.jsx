// filepath: c:\Users\mateo\OneDrive - Onderwijsgroep Tilburg\Documenten\School\LEEERJAAR3\challenge week\project\client\src\index.jsx
import React from "react";
import ReactDOM from "react-dom/client"; // Changed import
import App from "./App";
import "./App.css"; // Or your global CSS file

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement); // Create a root.

root.render(
  // Render the app using the new root.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
