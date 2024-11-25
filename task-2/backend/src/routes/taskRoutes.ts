import { Router } from "express";
import * as taskController from "../controllers/taskController";

const router = Router();

router.get("/", taskController.getTasks);
router.post("/", taskController.addTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
