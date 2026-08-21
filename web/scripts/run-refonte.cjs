const { spawnSync } = require("node:child_process");
const path = require("node:path");

const command = process.argv[2] || "start";
const allowedCommands = new Set(["start", "build"]);

if (!allowedCommands.has(command)) {
  console.error(`Commande non prise en charge : ${command}`);
  process.exit(1);
}

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const result = spawnSync(
  npmCommand,
  ["exec", "--", "docusaurus", command, ...process.argv.slice(3)],
  {
    cwd: path.resolve(__dirname, ".."),
    env: {
      ...process.env,
      INCLUDE_REFONTE_DOCS: "true",
    },
    stdio: "inherit",
  },
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
