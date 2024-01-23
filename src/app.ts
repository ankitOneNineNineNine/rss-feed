import * as express from "express";
import helmet from "helmet";
import * as morgan from "morgan";

import { ErrorHandlingMiddleware } from "./infrastructure/middleware";

/** Setup App */
const app = express();

/** Middlewares */
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

/** 404 */
app.use((_, res) => {
  res.status(404).json("Not Found");
});
/** Error Handling Middleware */
app.use(ErrorHandlingMiddleware);

export default app;
