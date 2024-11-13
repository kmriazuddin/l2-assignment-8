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
exports.memberController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const member_service_1 = require("./member.service");
const sendResponse_1 = require("../../utils/sendResponse");
const createMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const memberDetail = req.body;
    const result = yield member_service_1.memberService.createMemberIntoDB(memberDetail);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 201,
        message: "Member Created Successfully!",
        data: result,
    });
}));
const getMembers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allMembers = yield member_service_1.memberService.getAllMembersFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 200,
        message: "All Members Retrieved Successfully!",
        data: allMembers,
    });
}));
const getSingleMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.memberService.getSingleMemberFromDB(memberId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 200,
        message: "Member Retrieved Successfully!",
        data: result,
    });
}));
const updateMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const updateData = req.body;
    const result = yield member_service_1.memberService.updateMemberDB(memberId, updateData);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 200,
        message: "Member Updated Successfully!",
        data: result,
    });
}));
const deleteMember = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.memberService.deleteMemberFromDB(memberId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: 200,
        message: "Member deleted successfully",
    });
}));
exports.memberController = {
    createMember,
    getMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
