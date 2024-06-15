export function package_json(projectName: string, programmingLanguage: string) {
  let runScript = "nodemon src/index.js";
  let indexFile = "index.js";
  if (programmingLanguage == "typescript") {
    runScript = "nodemon -x tsx src/index.ts";
    indexFile = "index.ts";
  }
  const package_json = `
    {
      "name": "${projectName}",
      "version": "1.0.0",
      "description": "",
      "main": "${indexFile}",
      "scripts": {
        "dev": "${runScript}",
        "check": "npx prettier . --check",
        "write": "npx prettier . --write"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    `;
  return package_json;
}

export const typescript_index_file = `import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

dotenv.config();
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Basic routes
app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

// Switching enviroment variable
const PORT = process.env.PORT || 5000;


// Initialize server
app.listen(PORT, () => {
  console.log("Server is running at: http://localhost:" + PORT);
  console.log("API docs at: http://localhost:" + PORT + "/api-docs");
});
`;

export const javascript_index_file = `const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

// Basic routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Switching enviroment variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port: http://localhost:" + PORT);
});
`;

export const tsconfig = `{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "target": "es6",
    "module": "esnext",
    // "sourceMap": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  },
  "include": ["**/*"]
}`;

export const prettierrc = `{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2
}
`;
