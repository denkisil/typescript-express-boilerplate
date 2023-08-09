// DEPENDENCIES
import express, { Application } from "express";
// ROUTERS
import AppRouter from "@routers/app.router";
// MIDDLEWARES
import notFoundMiddleware from "@middlewares/404.middleware";
import errorMiddleware from "@middlewares/error.middleware";

// OTHER LOCAL IMPORTS
import { ENV } from "@config";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(AppRouter);

app.use(notFoundMiddleware);

// error middleware must be used a last
// because it's like `catch (error) {}`
app.use(errorMiddleware);

app.listen(ENV.APP_PORT || 3000);
