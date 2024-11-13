import express from "express";
import { borrowController } from "./borrow.controller";

const router = express.Router();

router.post("/", borrowController.borrowBook);

router.get("/overdue", borrowController.overdueBook);

export const borrowRoute = router;
