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
exports.returnService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../config/prisma");
const appError_1 = __importDefault(require("../../utils/appError"));
const returnBook = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const isBorrowRecordExists = yield prisma_1.prisma.borrowRecord.findUnique({
        where: {
            borrowId: borrowId.borrowId,
        },
    });
    if (!isBorrowRecordExists) {
        throw new appError_1.default(http_status_1.default.BAD_REQUEST, "Invalid Book ID!");
    }
    const returnedBook = yield prisma_1.prisma.borrowRecord.update({
        where: {
            borrowId: borrowId.borrowId,
        },
        data: {
            returnDate: new Date(),
        },
    });
});
exports.returnService = {
    returnBook,
};
