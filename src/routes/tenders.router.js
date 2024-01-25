import { Router } from "express";
import {
  getTenders,
  getTender,
  createTender,
  updateTender,
  deleteTender,
} from "../controllers/tenders.controller.js";

const tendersRouter = Router();

tendersRouter.get("/", getTenders);
tendersRouter.get("/:id", getTender);
tendersRouter.post("/", createTender);
tendersRouter.put("/:id", updateTender);
tendersRouter.delete("/:id", deleteTender);

export default tendersRouter;
