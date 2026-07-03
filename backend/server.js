const express = require("express");
const cors = require("cors");
const content = require("./data/content.json");
const db = require("./database");
const embeddings = require("./data/embeddings.json");
const cosineSimilarity = require("./similarity");
const { pipeline } = require("@xenova/transformers");

const app = express();
let extractor;

(async () => {
  console.log("Loading AI model...");

  extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2"
  );

  console.log("AI model loaded!");
})();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("AI Chat Agent Backend Running!");
});
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) {
  return res.status(400).json({
    answer: "Message is required"
  });
}

  const query = message.toLowerCase().trim();
  if (["hi", "hello", "hey"].includes(query)) {
  return res.json({
    answer: "Hello! How can I help you today?",
    found: true
  });
}

if (!extractor) {
  return res.status(503).json({
    answer: "AI model is still loading. Please try again.",
    found: false
  });
}
 const queryEmbedding = await extractor(
  message,
  {
    pooling: "mean",
    normalize: true
  }
);

let bestMatch = null;
let bestScore = -1;

for (const item of embeddings) {
  const score = cosineSimilarity(
    Array.from(queryEmbedding.data),
    item.embedding
  );

  if (score > bestScore) {
    bestScore = score;
    bestMatch = item;
  }
}

console.log("Best Match:", bestMatch.title);
console.log("Score:", bestScore);

  if (bestScore < 0.25) {
  return res.json({
    answer: "Sorry, I couldn't find that information.",
    found: false
  });
}

 return res.json({
  answer: bestMatch.content,
  source: bestMatch.url,
  found: true
});
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