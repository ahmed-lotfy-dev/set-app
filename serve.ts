import { serve } from "bun";
import { join } from "path";
import { readFile } from "fs/promises";

const PORT = process.env.PORT || 3000;
const DIST_DIR = join(import.meta.dir, "dist");

serve({
  port: PORT,
  async fetch(req: Request) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Default to index.html for root or SPA routing
    if (path === "/" || !path.includes(".")) {
      path = "/index.html";
    }

    const filePath = join(DIST_DIR, path);

    try {
      const file = Bun.file(filePath);
      const exists = await file.exists();

      if (exists) {
        return new Response(file);
      }

      // Fallback to index.html for SPA routing if file not found
      return new Response(Bun.file(join(DIST_DIR, "index.html")));
    } catch (e) {
      return new Response("Internal Server Error", { status: 500 });
    }
  },
});

console.log(`🚀 Server running at http://localhost:${PORT}`);
