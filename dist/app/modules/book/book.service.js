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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("../../config/prisma");
const createBookIntoDB = (bookDetails, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield prisma_1.prisma.book.create({
            data: bookDetails,
        });
        return book;
    }
    catch (error) {
        next(error);
    }
});
const getBooksFromDB = (next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield prisma_1.prisma.book.findMany({});
        return books;
    }
    catch (error) {
        next(error);
    }
});
const getSingleBook = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield prisma_1.prisma.book.findUniqueOrThrow({
            where: {
                bookId: id,
            },
        });
        return book;
    }
    catch (error) {
        next(error);
    }
});
const updateBook = (id, updateData, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isExist = yield prisma_1.prisma.book.findUniqueOrThrow({
            where: {
                bookId: id,
            },
        });
        const update = yield prisma_1.prisma.book.update({
            where: {
                bookId: id,
            },
            data: {
                title: updateData.title,
                genre: updateData.genre,
                publishedYear: updateData.publishedYear,
                totalCopies: updateData.totalCopies,
                availableCopies: updateData.availableCopies,
            },
        });
        return update;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw new Error("Requested Id Not Found!");
        }
    }
});
const deleteBook = (id, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma_1.prisma.book.findUniqueOrThrow({
            where: {
                bookId: id,
            },
        });
        const deletedData = yield prisma_1.prisma.book.delete({
            where: {
                bookId: id,
            },
        });
        return deletedData;
    }
    catch (error) {
        if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
            throw new Error("Requested Id Not Found!");
        }
    }
});
exports.bookService = {
    createBookIntoDB,
    getBooksFromDB,
    getSingleBook,
    updateBook,
    deleteBook,
};
