const { pipeline } = require("@xenova/transformers");

async function run() {
  console.log("Loading model...");

  const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2"
  );

  const output = await extractor(
    "What services do you provide?",
    {
      pooling: "mean",
      normalize: true
    }
  );

  console.log(output.data.length);
}

run();