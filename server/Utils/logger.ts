// utils/logger.ts
import fs from "fs";
import path from "path";

const logFilePath = path.join(__dirname, "../logs/custom.log");

export function logCustomMessage(message: string): void {
  // Custom logging logic, e.g., write to a log file
  fs.appendFileSync(logFilePath, `${new Date().toISOString()} - ${message}\n`);
}
