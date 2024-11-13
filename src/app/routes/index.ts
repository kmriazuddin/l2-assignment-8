import express from "express";
import { bookRoute } from "../modules/book/book.route";
import { memberRoute } from "../modules/members/member.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
