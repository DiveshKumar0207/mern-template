// utils/morgan.ts
import morgan, { TokenIndexer } from "morgan";
import fs from "fs";
import path from "path";

// Create a write stream for logging requests
const requestLogStream = fs.createWriteStream(
  path.join(__dirname, "../logs/access.log"),
  { flags: "a" }
);

// Create a write stream for logging errors
const errorLogStream = fs.createWriteStream(
  path.join(__dirname, "../logs/error.log"),
  { flags: "a" }
);

// Morgan middleware for logging requests to the console
export const consoleLogger = morgan("dev");

// Morgan middleware for logging requests to a file
export const fileLogger = morgan("combined", { stream: requestLogStream });

// Morgan middleware for logging errors to a file
export const errorLogger = morgan("combined", {
  stream: errorLogStream,
  skip: (req, res) => res.statusCode < 400,
});
