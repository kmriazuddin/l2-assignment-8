import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

const app = express();
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "LMS Server...",
  });
});

app.use("/api", router);

export default app;
