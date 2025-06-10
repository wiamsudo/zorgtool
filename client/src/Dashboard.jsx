import React, { useState } from "react";
import "./dashboard.css";

const initialMessages = [
  {
    id: 1,
    clientName: "Jan Jansen",
    text: "Help, ik heb een probleem met mijn account!",
    status: "red",
    timestamp: "2025-06-05T10:00:00Z",
    handled: false,
  },
  {
    id: 2,
    clientName: "Piet Pietersen",
    text: "Kleine vraag over de nieuwe medicatie.",
    status: "orange",
    timestamp: "2025-06-06T09:00:00Z",
    handled: true,
  },
  {
    id: 3,
    clientName: "Klaas Klaassen",
    text: "Dringend advies nodig over mijn symptomen.",
    status: "red",
    timestamp: "2025-06-04T14:00:00Z",
    handled: false,
  },
  {
    id: 4,
    clientName: "Marie Marijnissen",
    text: "Ik wil graag mijn afspraak verzetten.",
    status: "green",
    timestamp: "2025-06-06T11:00:00Z",
    handled: false,
  },
  {
    id: 5,
    clientName: "Ahmed Yilmaz",
    text: "Vraag over bijwerkingen.",
    status: "orange",
    timestamp: "2025-06-03T16:30:00Z",
    handled: false,
  },
];

// Define initialClients
const initialClients = [
  { id: 1, name: "Jan Jansen" },
  { id: 2, name: "Piet Pietersen" },
  { id: 3, name: "Klaas Klaassen" },
  { id: 4, name: "Marie Marijnissen" },
  { id: 5, name: "Ahmed Yilmaz" },
  { id: 6, name: "Sofia de Wit" },
];

// Define initialChatHistory
const initialChatHistory = [
  {
    id: 1,
    type: "document",
    clientName: "Piet Pietersen",
    details: "Samenvatting_24-04.pdf verstuurd",
    timestamp: "2025-06-06T09:05:00Z",
  },
  {
    id: 2,
    type: "clientHandled",
    clientName: "Piet Pietersen",
    details: "Afgehandeld (status: orange)",
    timestamp: "2025-06-06T09:10:00Z",
  },
  {
    id: 3,
    type: "document",
    clientName: "Jan Jansen",
    details: "Instructieblad_XYZ.docx verstuurd",
    timestamp: "2025-06-05T10:30:00Z",
  },
];

// Define FakePopup component
function FakePopup({ message, onClose }) {
  return (
    <div className="fake-popup-overlay">
      <div className="fake-popup">
        <p>{message}</p>
        <button onClick={onClose}>Sluiten</button>
      </div>
    </div>
  );
}

function Dashboard({ onClose }) {
  const [messages, setMessages] = useState(initialMessages);
  const [clients] = useState(initialClients);
  const [chatHistory, setChatHistory] = useState(initialChatHistory);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleMarkAsHandled = (messageId) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, handled: !msg.handled } : msg
      )
    );
    const message = messages.find((msg) => msg.id === messageId);
    if (message) {
      const action = message.handled
        ? "gemarkeerd als onafgehandeld"
        : "gemarkeerd als afgehandeld";
      addToHistory(
        "clientHandled",
        message.clientName,
        `${action} (status: ${message.status})`
      );
    }
  };

  const handleSendDocument = (clientName) => {
    const documentName = `Voorbeeld_Document_${Date.now()}.pdf`;
    setPopupMessage(
      `Document "${documentName}" is verstuurd naar ${clientName}.`
    );
    setShowPopup(true);
    addToHistory(
      "document",
      clientName,
      `Document "${documentName}" verstuurd`
    );
  };

  const addToHistory = (type, clientName, details) => {
    const newHistoryItem = {
      id: Date.now(),
      type,
      clientName,
      details,
      timestamp: new Date().toISOString(),
    };
    setChatHistory((prev) =>
      [newHistoryItem, ...prev].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      )
    );
  };

  const redMessages = messages
    .filter((msg) => msg.status === "red")
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  const orangeMessages = messages
    .filter((msg) => msg.status === "orange")
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>Dashboard</h1>
        <div className="dashboard-section meldingen">
          <h2>Meldingen</h2>
          <div className="meldingen-categorie">
            <h3>Rode Meldingen</h3>
            {redMessages.length === 0 && <p>Geen rode meldingen.</p>}
            <ul>
              {redMessages.map((msg) => (
                <li
                  key={msg.id}
                  className={`melding-item status-${msg.status} ${
                    msg.handled ? "handled" : ""
                  }`}
                >
                  <p>
                    <strong>Client:</strong> {msg.clientName}
                  </p>
                  <p>
                    <strong>Bericht:</strong> {msg.text}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className={`status-badge status-${msg.status}`}>
                      {msg.status}
                    </span>
                  </p>
                  <p>
                    <strong>Tijd:</strong>{" "}
                    {new Date(msg.timestamp).toLocaleString()}
                  </p>
                  <button onClick={() => handleMarkAsHandled(msg.id)}>
                    {msg.handled
                      ? "Markeer als Onbehandeld"
                      : "Markeer als Behandeld"}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="meldingen-categorie">
            <h3>Oranje Meldingen</h3>
            {orangeMessages.length === 0 && <p>Geen oranje meldingen.</p>}
            <ul>
              {orangeMessages.map((msg) => (
                <li
                  key={msg.id}
                  className={`melding-item status-${msg.status} ${
                    msg.handled ? "handled" : ""
                  }`}
                >
                  <p>
                    <strong>Client:</strong> {msg.clientName}
                  </p>
                  <p>
                    <strong>Bericht:</strong> {msg.text}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span className={`status-badge status-${msg.status}`}>
                      {msg.status}
                    </span>
                  </p>
                  <p>
                    <strong>Tijd:</strong>{" "}
                    {new Date(msg.timestamp).toLocaleString()}
                  </p>
                  <button onClick={() => handleMarkAsHandled(msg.id)}>
                    {msg.handled
                      ? "Markeer als Onbehandeld"
                      : "Markeer als Behandeld"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ooooooooooooooooooooooo - Chat Area */}
      <div className="right-panel">
        {/* uu - Inner Content */}
        <div className="inner-content">
          <div className="dashboard-section clienten">
            <h2>Clienten</h2>
            <input
              type="text"
              placeholder="Zoek client..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {filteredClients.length === 0 && <p>Geen clienten gevonden.</p>}
            <ul>
              {filteredClients.map((client) => (
                <li key={client.id} className="client-item">
                  <span>{client.name}</span>
                  <button onClick={() => handleSendDocument(client.name)}>
                    Stuur Document
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="dashboard-section chat-history">
            <h2>Recente Activiteit / Geschiedenis</h2>
            {chatHistory.length === 0 && <p>Geen recente activiteit.</p>}
            <ul>
              {chatHistory.map((item) => (
                <li key={item.id} className={`history-item type-${item.type}`}>
                  <p>
                    <strong>
                      {item.type === "document"
                        ? "Document Actie"
                        : "Client Status"}
                    </strong>
                  </p>
                  <p>
                    <strong>Client:</strong> {item.clientName}
                  </p>
                  <p>{item.details}</p>
                  <p>
                    <strong>Tijd:</strong>{" "}
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button onClick={onClose} className="back-button">
          Back
        </button>
      </div>
      {showPopup && (
        <FakePopup
          message={popupMessage}
          onClose={() => {
            setShowPopup(false);
          }}
        />
      )}
    </div>
  );
}

export default Dashboard;
