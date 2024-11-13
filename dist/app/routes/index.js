"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/book/book.route");
const member_route_1 = require("../modules/members/member.route");
const borrow_route_1 = require("../modules/borrow/borrow.route");
const return_route_1 = require("../modules/return/return.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/book",
        route: book_route_1.bookRoute,
    },
    {
        path: "/members",
        route: member_route_1.memberRoute,
    },
    {
        path: "/borrow",
        route: borrow_route_1.borrowRoute,
    },
    {
        path: "/return",
        route: return_route_1.returnRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
