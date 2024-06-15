import express, { Request, Response } from "express";
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
