const express = require("express");
const cors = require("cors");
const content = require("./data/content.json");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("AI Chat Agent Backend Running!");
});
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      answer: "Message is required"
    });
  }

  const query = message.toLowerCase();

  let bestMatch = null;

  for (const item of content) {
    if (
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
    ) {
      bestMatch = item;
      break;
    }
  }

  if (bestMatch) {
    return res.json({
      answer: bestMatch.content,
      source: bestMatch.url,
      found: true
    });
  }

  return res.json({
    answer: "Sorry, I couldn't find that information.",
    found: false
  });
});
app.post("/api/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const leadId = db.saveLead({
      name,
      email,
      phone,
      message,
      created_at: new Date().toISOString()
    });

    res.json({
      success: true,
      leadId
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API route working"
  });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});