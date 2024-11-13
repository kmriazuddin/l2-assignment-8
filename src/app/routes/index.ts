import express from "express";
import { bookRoute } from "../modules/book/book.route";
import { memberRoute } from "../modules/members/member.route";
import { borrowRoute } from "../modules/borrow/borrow.route";
import { returnRoute } from "../modules/return/return.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/book",
    route: bookRoute,
  },
  {
    path: "/members",
    route: memberRoute,
  },
  {
    path: "/borrow",
    route: borrowRoute,
  },
  {
    path: "/return",
    route: returnRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
