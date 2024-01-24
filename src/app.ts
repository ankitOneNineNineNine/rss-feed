import * as express from "express";
import helmet from "helmet";
import * as morgan from "morgan";

import { getFeedController } from "./controller/feed.controller";
import { ErrorHandlingMiddleware, validFeedRequest } from "./middleware";

/** Setup App */
const app = express();

/** Middlewares */
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

/**
 * Route for Feed Generator
 */
app.get("/:newspaper/:section", validFeedRequest, getFeedController);

/** 404 */
app.use((_, res) => {
  res.status(404).json("Not Found");
});
/** Error Handling Middleware */
app.use(ErrorHandlingMiddleware);

export default app;