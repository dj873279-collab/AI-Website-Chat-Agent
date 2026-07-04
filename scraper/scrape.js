const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

async function scrapeWebsite(url) {
try {
console.log("Scraping:", url);

const { data } = await axios.get(url);

const $ = cheerio.load(data);

const content = [];

$("h1, h2, h3").each((index, element) => {
  const title = $(element).text().trim();

  const paragraph = $(element)
    .nextAll("p")
    .first()
    .text()
    .trim();

  if (title && paragraph) {
    content.push({
      title,
      content: paragraph,
      url
    });
  }
});

const outputPath = path.join(
  __dirname,
  "../backend/data/content.json"
);

fs.writeFileSync(
  outputPath,
  JSON.stringify(content, null, 2)
);

console.log(
  `Saved ${content.length} content blocks to content.json`
);


} catch (error) {
console.error("Scraping failed:", error.message);
}
}

scrapeWebsite("https://example.com");
