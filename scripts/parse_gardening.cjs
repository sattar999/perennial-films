const fs = require("fs");
const path = require("path");

const gHtml = fs.readFileSync(path.join(__dirname, "../src/data/gardening.html"), "utf8");

const m = gHtml.match(/<div class="entry-content[^"]*"[^>]*>(.*?)<\/div><!-- \.entry-content -->/is);
if (m) {
  let content = m[1];
  
  // extract images
  const images = [...content.matchAll(/src="([^"]+\.(?:jpg|png|webp|jpeg)[^"]*)"/gi)].map(x => x[1]);
  // extract vimeo
  const vimeo = [...content.matchAll(/src="(https:\/\/player\.vimeo\.com[^"]+)"/gi)].map(x => x[1]);
  // extract links
  const links = [...content.matchAll(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gis)].map(x => ({
    url: x[1],
    text: x[2].replace(/<[^>]+>/g, "").trim()
  }));

  const cleanedText = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "\"")
    .replace(/&#8221;/g, "\"")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/\s+/g, " ")
    .trim();

  fs.writeFileSync(path.join(__dirname, "../src/data/gardening_parsed.json"), JSON.stringify({
    text: cleanedText,
    images: [...new Set(images)],
    vimeo,
    links
  }, null, 2));

  console.log("Gardening parsed successfully, length:", cleanedText.length);
}
