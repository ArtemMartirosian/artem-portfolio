import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import test from "node:test";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const port = 41_000 + (process.pid % 1_000);
const origin = `http://127.0.0.1:${port}`;
let server;
let serverLog = "";

async function waitForServer() {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (server?.exitCode !== null) {
      throw new Error(`Next.js exited before becoming ready.\n${serverLog}`);
    }
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Timed out waiting for Next.js.\n${serverLog}`);
}

test.before(async () => {
  server = spawn(process.execPath, [nextBin, "start", "-H", "127.0.0.1", "-p", String(port)], {
    cwd: projectRoot,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  server.stdout.on("data", (chunk) => { serverLog += chunk; });
  server.stderr.on("data", (chunk) => { serverLog += chunk; });
  await waitForServer();
});

test.after(() => {
  server?.kill("SIGTERM");
});

test("official Next.js server renders Artem's portfolio", async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="en"/i);
  assert.match(html, /<title>Artem Martirosian — Full-Stack Developer<\/title>/i);
  assert.match(html, /Frontend-first \/ Full-stack developer/i);
  assert.match(html, /Selected builds\./i);
  assert.match(html, /Complete project archive/i);
  assert.match(html, /CTSoft/i);
  assert.match(html, /Cosmobox/i);
  assert.match(html, /UZTELECOM MyHit/i);
  assert.match(html, /TRODAT ADMIN/i);
  assert.match(html, /Danielyan Furniture/i);
  assert.match(html, /One signal\./i);
  assert.match(html, /Digitalize/i);
  assert.match(html, /artem\.martirosian2001@gmail\.com/i);
  assert.match(html, /id="work"/i);
  assert.match(html, /id="expertise"/i);
  assert.match(html, /id="experience"/i);
  assert.match(html, /id="contact"/i);
  assert.match(html, /id="mobile-navigation"/i);
  assert.match(html, /aria-controls="mobile-navigation"/i);
  assert.match(html, /04 sections/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|vinext/i);
});

test("pins the requested Next.js and Tailwind stack", async () => {
  const packageJson = JSON.parse(
    await readFile(new URL("../package.json", import.meta.url), "utf8"),
  );
  const nextConfig = await readFile(new URL("../next.config.ts", import.meta.url), "utf8");

  assert.equal(packageJson.dependencies.next, "16.3.1");
  assert.equal(packageJson.engines.node, "22.x");
  assert.equal(packageJson.devDependencies.tailwindcss, "4.3.3");
  assert.equal(packageJson.devDependencies["@tailwindcss/postcss"], "4.3.3");
  assert.equal(packageJson.devDependencies["@opennextjs/cloudflare"], "1.20.2");
  assert.equal(packageJson.devDependencies.vinext, undefined);
  assert.equal(packageJson.devDependencies.vite, undefined);
  assert.match(nextConfig, /process\.env\.VERCEL/);
  assert.match(nextConfig, /output:\s*["']standalone["']/);
});
