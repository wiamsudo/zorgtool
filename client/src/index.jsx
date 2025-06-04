// filepath: c:\Users\mateo\OneDrive - Onderwijsgroep Tilburg\Documenten\School\LEEERJAAR3\challenge week\project\client\src\index.jsx
import React from "react";
import ReactDOM from "react-dom"; // For React 17
// For React 18: import ReactDOM from 'react-dom/client';
import App from "./App";
import "./App.css"; // Global styles or App specific styles

// For React 17:
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// For React 18:
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
