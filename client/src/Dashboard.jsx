import React from "react";
import "./dashboard.css"; 
import ReactDOM from "react-dom";// Ensure App.css is imported either here or in index.jsx

function Dashboard() {
  return (
    <div className="container">
      <div className="meldingen"></div>
      <div className="clienten"></div>
      <div className="chat-history"></div>
    </div>
  );
}

export default Dashboard;