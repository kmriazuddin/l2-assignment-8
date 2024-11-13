import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "LMS Server Is Running...",
  });
});

app.use("/api", router);

export default app;
