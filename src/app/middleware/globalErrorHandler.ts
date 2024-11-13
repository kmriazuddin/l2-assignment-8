import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";
import AppError from "../utils/appError";

const globalError: ErrorRequestHandler = (err, req, res, next) => {
  let status: number = httpStatus.INTERNAL_SERVER_ERROR || 500;
  let message = err.message || "Internal Server Error";
  let success = false;
  if (err instanceof AppError) {
    status = err.statusCode;
    message = err.message;
  }
  res.status(status).json({
    success: success,
    message: message,
    status: status,
  });
};

export default globalError;
