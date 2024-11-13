"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse = (res, data) => {
    res.status(http_status_1.default.OK).json({
        success: data.success,
        status: data.status,
        message: data.message,
        data: data.data,
    });
};
exports.sendResponse = sendResponse;
