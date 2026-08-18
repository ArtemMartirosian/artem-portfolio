import { access, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const projectRoot = process.cwd();
const openNextRoot = join(projectRoot, ".open-next");
const distRoot = join(projectRoot, "dist");
const serverRoot = join(distRoot, "server");
const workerRoot = join(serverRoot, "open-next");
const clientRoot = join(distRoot, "client");

await access(join(openNextRoot, "worker.js"));
await access(join(openNextRoot, "assets"));

await rm(distRoot, { recursive: true, force: true });
await mkdir(serverRoot, { recursive: true });
await cp(openNextRoot, workerRoot, { recursive: true });
await cp(join(openNextRoot, "assets"), clientRoot, { recursive: true });
await rm(join(workerRoot, "assets"), { recursive: true, force: true });

await writeFile(
  join(serverRoot, "index.js"),
  'export { default } from "./open-next/worker.js";\nexport * from "./open-next/worker.js";\n',
);

await writeFile(
  join(serverRoot, "wrangler.json"),
  JSON.stringify({
    topLevelName: "artem-martirosian-portfolio",
    name: "artem-martirosian-portfolio",
    compatibility_date: "2026-08-18",
    compatibility_flags: ["nodejs_compat"],
    main: "index.js",
    no_bundle: true,
    rules: [{ type: "ESModule", globs: ["**/*.js", "**/*.mjs"] }],
    assets: { directory: "../client" },
    observability: { enabled: true },
  }),
);

console.log("Prepared Cloudflare Worker output for Sites.");
