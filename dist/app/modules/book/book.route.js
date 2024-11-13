"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoute = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/", book_controller_1.bookController.createBook);
router.get("/", book_controller_1.bookController.getBooks);
router.get("/:bookId", book_controller_1.bookController.getSingleBook);
router.put("/:bookId", book_controller_1.bookController.updateBook);
router.delete("/:bookId", book_controller_1.bookController.deleteBook);
exports.bookRoute = router;
