import express from "express";
import { bookRoute } from "../modules/book/book.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: bookRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;