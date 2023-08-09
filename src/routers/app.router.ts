import { Router } from "express";
// ROUTERS
import ExampleRouter from "@routers/example.router";

const AppRouter: Router = Router();

// filename before `.router.ts` = router path
AppRouter.use("/example", ExampleRouter);

export default AppRouter;
