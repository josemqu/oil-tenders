import { Router } from "express";
import tendersRouter from "./tenders.router.js";

const routerAPI = (app) => {
  const router = Router();
  app.use("/api/v1", router);
  router.use("/tenders", tendersRouter);
};

export default routerAPI;
