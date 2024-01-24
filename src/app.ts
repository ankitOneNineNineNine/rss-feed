import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { getFeedController } from "./controller";
import { checkCache, errorHandler, isValidFeedRequest } from "./middleware";

/** Setup App */
const app = express();

/** Middlewares */
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

/** Set XML response header for all routes */
app.use((_req, res, next) => {
  res.setHeader("content-type", "text/xml");
  next();
});

/**
 * Route for Feed Generator
 */
app.get("/:newspaper/:section", isValidFeedRequest, checkCache, getFeedController);

/** 404 */
app.use((_, res) => {
  res.status(404).json("Not Found");
});
/** Error Handling Middleware */
app.use(errorHandler);

export default app;
