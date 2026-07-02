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