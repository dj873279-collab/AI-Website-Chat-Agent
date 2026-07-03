const embeddings = require("./data/embeddings.json");
const cosineSimilarity = require("./similarity");
const { pipeline } = require("@xenova/transformers");

async function search(query) {
  const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2"
  );

  const queryEmbedding = await extractor(
    query,
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

  console.log("\nQuery:", query);
  console.log("Best Match:", bestMatch.title);
  console.log("Score:", bestScore);
  console.log("Answer:", bestMatch.content);
}

search("hi");