const https = require("https");
const fs = require("fs");
const path = require("path");

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function cleanHtml(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, "");
}

const pages = [
  { key: "home", url: "https://perennial-films.com/" },
  { key: "gardening", url: "https://perennial-films.com/our-films-2/gardening-for-the-planet-a-climate-change-documentary/" },
  { key: "men_women", url: "https://perennial-films.com/men-are-human-women-are-buffalo/" },
  { key: "gillian", url: "https://perennial-films.com/the-gillian-film/" },
  { key: "mama_c", url: "https://perennial-films.com/mama-c-urban-warrior-in-the-african-bush/" },
  { key: "children", url: "https://perennial-films.com/these-are-our-children/" },
  { key: "about_director", url: "https://perennial-films.com/about-the-director/" },
  { key: "about", url: "https://perennial-films.com/about/" },
  { key: "contact", url: "https://perennial-films.com/contact/" },
  { key: "purchase", url: "https://perennial-films.com/purchase-a-film/" }
];

async function run() {
  const inventory = {};
  for (const p of pages) {
    try {
      console.log("Fetching", p.key, p.url);
      const raw = await get(p.url);
      const cleaned = cleanHtml(raw);
      const titleMatch = raw.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : "";
      
      const headings = [...cleaned.matchAll(/<h([1-6])[^>]*>(.*?)<\/h\1>/gis)].map(m => m[2].replace(/<[^>]+>/g, "").trim());
      
      const entryMatch = cleaned.match(/<div class="entry-content[^"]*"[^>]*>(.*?)<\/div><!-- \.entry-content -->/is) ||
                         cleaned.match(/<article[^>]*>(.*?)<\/article>/is) ||
                         cleaned.match(/<main[^>]*>(.*?)<\/main>/is);
      const rawContent = entryMatch ? entryMatch[1] : cleaned;
      const mainText = rawContent
        .replace(/<p[^>]*>/gi, "\n\n")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&#8217;/g, "'")
        .replace(/&#8220;/g, "\"")
        .replace(/&#8221;/g, "\"")
        .replace(/&#8211;/g, "–")
        .replace(/&#8212;/g, "—")
        .replace(/\s+/g, " ")
        .trim();
      
      const videos = [...cleaned.matchAll(/src="(https:\/\/(?:player\.vimeo\.com|www\.youtube\.com)[^"]+)"/gi)].map(m => m[1]);
      const imgMatches = [...cleaned.matchAll(/src="([^"]+\.(?:jpg|png|webp|jpeg)[^"]*)"/gi)].map(m => m[1]);

      inventory[p.key] = {
        url: p.url,
        title,
        headings,
        textPreview: mainText.substring(0, 500),
        fullText: mainText,
        videos,
        images: [...new Set(imgMatches)]
      };
    } catch (e) {
      console.error("Error fetching", p.key, e.message);
    }
  }

  const outDir = path.resolve("./src/data");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  fs.writeFileSync(path.join(outDir, "scraped_content.json"), JSON.stringify(inventory, null, 2));
  console.log("Written successfully to src/data/scraped_content.json");
}

run();
