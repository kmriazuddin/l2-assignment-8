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
exports.borrowService = void 0;
const prisma_1 = require("../../config/prisma");
const borrowBook = (borrowBookData) => __awaiter(void 0, void 0, void 0, function* () {
    const bookExist = yield prisma_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId: borrowBookData.bookId,
        },
    });
    const memberExist = yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: borrowBookData.memberId,
        },
    });
    const borrowData = yield prisma_1.prisma.borrowRecord.create({
        data: borrowBookData,
    });
    return borrowData;
});
const overdueBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const overdue = yield prisma_1.prisma.borrowRecord.findMany({
        include: {
            book: true,
            member: true,
        },
    });
    const overDueBooks = overdue.map((book) => {
        let overdueBook;
        const overDueDay = Math.abs(14 -
            Math.floor(new Date(book.returnDate.getTime() - book.borrowDate.getTime()) /
                (1000 * 60 * 60 * 24)));
        if (overDueDay > 0) {
            overdueBook = {
                borrowId: book.borrowId,
                bookTittle: book.book.title,
                borrowerName: book.member.name,
                overdueDays: overDueDay,
            };
        }
        return overdueBook;
    });
    return overDueBooks;
});
exports.borrowService = {
    borrowBook,
    overdueBook,
};
