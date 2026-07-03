const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Build Version 1
execSync("npm install", { cwd: "ver_1", stdio: "inherit" });
execSync("npm run build", { cwd: "ver_1", stdio: "inherit" });

// Build Version 2
execSync("npm install", { cwd: "ver_2", stdio: "inherit" });
execSync("npm run build", { cwd: "ver_2", stdio: "inherit" });

// Clean deploy folder
fs.rmSync("deploy", { recursive: true, force: true });
fs.mkdirSync("deploy");

// Copy ver_2 to deploy root
fs.cpSync("ver_2/dist", "deploy/ver_2", { recursive: true });

// Copy ver_1 to deploy/ver_1
fs.cpSync("ver_1/dist", "deploy", { recursive: true });

console.log("Done!");