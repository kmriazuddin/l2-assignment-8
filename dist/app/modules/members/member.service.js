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
exports.memberService = void 0;
const prisma_1 = require("../../config/prisma");
const createMemberIntoDB = (memberDetails) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.prisma.member.create({
        data: memberDetails,
    });
    return member;
});
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const members = yield prisma_1.prisma.member.findMany({});
    return members;
});
const getSingleMemberFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: id,
        },
    });
    return member;
});
const updateMemberDB = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: id,
        },
    });
    const updated = yield prisma_1.prisma.member.update({
        where: {
            memberId: id,
        },
        data: {
            name: updatedData.name,
            email: updatedData.email,
            phone: updatedData.phone,
        },
    });
    return updated;
});
const deleteMemberFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId: id,
        },
    });
    const deletedData = yield prisma_1.prisma.member.delete({
        where: {
            memberId: id,
        },
    });
});
exports.memberService = {
    createMemberIntoDB,
    getAllMembersFromDB,
    getSingleMemberFromDB,
    updateMemberDB,
    deleteMemberFromDB,
};
