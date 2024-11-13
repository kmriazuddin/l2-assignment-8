import express, { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

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

// Global Error Handler
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Api Not Found!",
    error: {
      path: req.originalUrl,
      message: "Your requested path is not found!",
    },
  });
});

export default app;
