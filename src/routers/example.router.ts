import { Router } from "express";
// HANDLERS
import ExampleHandler from "@handlers/example.handler";

// Filename + "Router" = name of the router
const ExampleRouter: Router = Router();

ExampleRouter.all("/", ExampleHandler.exampleHandler);

export default ExampleRouter;
