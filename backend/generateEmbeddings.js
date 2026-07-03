const fs = require("fs");
const content = require("./data/content.json");
const { pipeline } = require("@xenova/transformers");

async function generate() {
  console.log("Loading model...");

  const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2"
  );

  const results = [];

  for (const item of content) {
    const embedding = await extractor(
      `${item.title} ${item.content}`,
      {
        pooling: "mean",
        normalize: true
      }
    );

    results.push({
      ...item,
      embedding: Array.from(embedding.data)
    });

    console.log("Embedded:", item.title);
  }

  fs.writeFileSync(
    "./data/embeddings.json",
    JSON.stringify(results, null, 2)
  );

  console.log("Done!");
}

generate();