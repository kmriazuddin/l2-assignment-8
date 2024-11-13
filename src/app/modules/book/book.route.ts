import express from "express";
import { bookController } from "./book.controller";

const router = express.Router();

router.post("/", bookController.createBook);

router.get("/", bookController.getBooks);

router.get("/:bookId", bookController.getSingleBook);

router.put("/:bookId", bookController.updateBook);

router.delete("/:bookId", bookController.deleteBook);

export const bookRoute = router;
