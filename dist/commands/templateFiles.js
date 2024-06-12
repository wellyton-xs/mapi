import path from "path";
import fs from "fs";
function write_file(projectName, fileName, content) {
    fs.writeFileSync(path.join(projectName, fileName), content);
}
export function create_package_json(projectName) {
    const package_json = `
    {
      "name": "${projectName}",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "dev": "node src/index.js",
        "check": "npx prettier . --check",
        "write": "npx prettier . --write"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    `;
    write_file(projectName, "package.json", package_json);
}
export function create_index_file(projectName) {
    const content = `const express = require('express');const dotenv = require('dotenv');const morgan = require('morgan');const cors = require('cors');const bodyParser = require('body-parser');dotenv.config();const app = express();app.use(morgan('dev'));app.use(cors());app.use(bodyParser.json());app.get('/', (req, res) => {res.send('API is running...');});const PORT = process.env.PORT || 5000;app.listen(PORT, () => {console.log("Server is running on port: http://localhost:" + PORT);});`;
    write_file(`${projectName}/src/`, "index.js", content);
}
export function create_prettier_file(projectName) {
    const content = `{
    "semi": true,
    "singleQuote": false,
    "tabWidth": 2
  }
  `;
    write_file(`${projectName}`, ".prettierrc", content);
}
