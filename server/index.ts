import express, { Request, Response, NextFunction } from "express";
import connectToDatabase from "./db/connection/connect";
import hpp from "hpp";
import helmet from "helmet";
import csrf from "csrf";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";

import { rateLimiterMiddleware } from "./utils/ratelimiter";
import routes from "./router/routes/route";
import { consoleLogger, fileLogger, errorLogger } from "./utils/morgan";
import { PORT } from "./config/server";

const app = express();

// Connect to the database
connectToDatabase();

//
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS for all routes
app.use(cors());
// Enable Helmet middleware for secure HTTP headers
app.use(helmet());

// Enable HPP middleware to prevent HTTP Parameter Pollution attacks
app.use(hpp());

const csrfProtection = new csrf();
const secret = csrfProtection.secretSync();

// Enable CSRF protection with csrf middleware
app.use((req, res, next) => {
  const token = csrfProtection.create(secret);
  res.setHeader("X-CSRF-Token", token);

  if (req.method !== "GET") {
    const submittedToken = req.body.csrfToken || req.headers["X-CSRF-Token"];
    if (!submittedToken) {
      return res.status(400).send("Missing CSRF token");
    }
    if (!csrfProtection.verify(secret, submittedToken)) {
      return res.status(400).send("Invalid CSRF token");
    }
  }
  next();
});

// Use rate limiter middleware
app.use(rateLimiterMiddleware);

// Use file logger for all environments
app.use(fileLogger);
app.use(errorLogger);
app.use(consoleLogger);

// Use compression middleware // compress the response based on the client's capabilities
app.use(compression());

//  routes
// app.use("/api", routes);
app.use("/api/", routes);

if (process.env.NODE_ENV === "development") {
  // Development environment error handling
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send(`Internal Server Error: ${err.message}`);
  });
} else {
  // Production environment error handling
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send("Internal Server Error");
  });
}

// listening server port
app.listen(PORT, () => {
  console.log(
    `server running at ${PORT} || http://127.0.0.1:${PORT} || http://localhost:${PORT}`
  );
});
