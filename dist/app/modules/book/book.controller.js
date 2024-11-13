"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const book_service_1 = require("./book.service");
const sendResponse_1 = require("../../utils/sendResponse");
const createBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const bookDetails = req.body;
    const result = yield book_service_1.bookService.createBookIntoDB(bookDetails, next);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 201,
        message: "Book Created Successfully!",
        data: result,
    });
}));
const getBooks = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allBook = yield book_service_1.bookService.getBooksFromDB(next);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 200,
        message: "All Book Data Retrieved Successfully!",
        data: allBook,
    });
}));
const getSingleBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.bookService.getSingleBook(bookId, next);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 200,
        message: "Single Book Data Retrieved Successfully!",
        data: result,
    });
}));
const updateBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const updateData = req.body;
    const result = yield book_service_1.bookService.updateBook(bookId, updateData, next);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 200,
        message: "Data Update Successfully!",
        data: result,
    });
}));
const deleteBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.bookService.deleteBook(bookId, next);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 200,
        message: "Book Delete Successfully!",
        data: result,
    });
}));
exports.bookController = {
    createBook,
    getBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
