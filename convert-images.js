import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, parse, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, "public", "products");
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".heic", ".HEIC"];

async function convertToWebP(filePath) {
  const { dir, name, ext } = parse(filePath);

  if (!EXTENSIONS.includes(ext)) {
    return;
  }

  const outputPath = join(dir, `${name}.webp`);

  try {
    await sharp(filePath).webp({ quality: 90, effort: 6 }).toFile(outputPath);

    console.log(`✓ Converted: ${name}${ext} -> ${name}.webp`);
  } catch (error) {
    console.error(`✗ Error converting ${filePath}:`, error.message);
  }
}

async function processDirectory(dirPath) {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dirPath, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile()) {
        await convertToWebP(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

console.log("Starting image conversion to WebP...\n");
await processDirectory(PUBLIC_DIR);
console.log("\nConversion complete!");
