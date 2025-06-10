import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import "./ChatUI.css";

const LOCAL_STORAGE_KEY = "chatMessages";

const ChatUI = () => {
  const [messages, setMessages] = useState(() => {
    // Only runs once on mount
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Save messages to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      console.error("Error saving chat messages:", e);
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === "" || isLoading) return;
    const newUserMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newUserMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        setMessages((prev) => [
          ...prev,
          {
            text: `Error: ${errorData.error || response.statusText}`,
            sender: "bot",
            isError: true,
          },
        ]);
        return;
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { text: data.reply || "No response from bot.", sender: "bot" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          text: "Error communicating with the server.",
          sender: "bot",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-ui-container">
      <div className="messages-area">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender} ${msg.isError ? "error" : ""}`}
          >
            {msg.sender === "bot" && !msg.isError ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        ))}
        {isLoading && (
          <div className="message bot typing-indicator">
            <p>Bot is thinking...</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type a message..."
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
