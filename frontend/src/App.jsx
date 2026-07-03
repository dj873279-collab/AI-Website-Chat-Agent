import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

if (data.found === false) {
  setShowForm(true);
}

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: data.answer
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
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        fontSize: "24px",
        cursor: "pointer"
      }}
    >
      💬
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
      <h1>AI Website Chat Agent</h1>

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
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <input
        value={message}
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