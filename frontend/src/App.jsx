import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
  {
    sender: "bot",
    text: "Hello! I'm your AI assistant. Ask me about our services, company, or support."
  }
]);
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    const response = await fetch(
  "https://ai-website-chat-agent-backend.onrender.com/api/chat",
  {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });

    const data = await response.json();
    await new Promise((resolve) =>
  setTimeout(resolve, 1000)
);

setIsTyping(false);

if (data.found === false) {
  setShowForm(true);
}

    setMessages((prev) => [
  ...prev,
  {
    sender: "bot",
    text: data.answer,
    source: data.source
  }
]);

    setMessage("");
  };
const submitLead = async () => {
  const response = await fetch(
  "https://ai-website-chat-agent-backend.onrender.com/api/contact",
  {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message: "Lead from chatbot"
      })
    }
  );

  const data = await response.json();

  alert("Lead submitted successfully!");

  setShowForm(false);

  setName("");
  setEmail("");
  setPhone("");
};
  return (
    <>
  {!isOpen && (
    <button
      onClick={() => setIsOpen(true)}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "80px",
        height: "80px",
        fontWeight: "bold",
        borderRadius: "50%",
        fontSize: "24px",
        cursor: "pointer"
      }}
    >
      💬 Chat
    </button>
  )}

  {isOpen && (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "350px",
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}
    >
      <div
  style={{
    background: "#2563eb",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "10px"
  }}
>
  <h3
    style={{
      margin: 0
    }}
  >
    AI Assistant
  </h3>

  <small>
    Online • Ready to help
  </small>
</div>

      <div
        style={{
          border: "1px solid #ccc",
          height: "400px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        {messages.map((msg, index) => (
  <div
    key={index}
    style={{
      textAlign: msg.sender === "user" ? "right" : "left",
      marginBottom: "10px"
    }}
  >
    <div
      style={{
        display: "inline-block",
        padding: "10px",
        borderRadius: "12px",
        maxWidth: "80%",
        background:
          msg.sender === "user"
            ? "#2563eb"
            : "#f3f4f6",
        color:
          msg.sender === "user"
            ? "white"
            : "black"
      }}
    >
      {msg.text}

      {msg.source && (
        <div
          style={{
            fontSize: "11px",
            marginTop: "5px",
            opacity: 0.7
          }}
        >
          Source: {msg.source}
        </div>
      )}
    </div>
  </div>
))}

{isTyping && (
  <div
    style={{
      fontStyle: "italic",
      color: "#666"
    }}
  >
    Bot is typing...
  </div>
)}
      </div>

      <input
        value={message}
        onKeyDown={(e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
}}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question..."
        style={{
          width: "80%",
          padding: "10px"
        }}
      />

      <button
  onClick={sendMessage}
  style={{
    padding: "10px"
  }}
>
  Send
</button>

{showForm && (
  <div
    style={{
      marginTop: "20px",
      border: "1px solid #ccc",
      padding: "10px"
    }}
  >
    <h3>Contact Us</h3>

    <input
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <br /><br />

    <input
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <br /><br />

    <input
      placeholder="Phone"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />

    <br /><br />

    <button onClick={submitLead}>
      Submit
    </button>
  </div>
)}

<button
  onClick={() => setIsOpen(false)}
  style={{
    marginTop: "10px"
  }}
>
  Close
</button>

</div>
)}
</>
  );
}