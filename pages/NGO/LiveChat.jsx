import React, { useState } from "react";

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { sender: "NGO", text: "Hello! How can we help you today?" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white border rounded-lg shadow-md p-4">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg max-w-[70%] ${
              msg.sender === "You"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            <strong>{msg.sender}: </strong>{msg.text}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-full px-4 py-2"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
