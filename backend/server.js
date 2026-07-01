const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    answer: `Bot received: ${message}`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});