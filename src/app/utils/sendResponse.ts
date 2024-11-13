import { Response } from "express";
import httpStatus from "http-status";

export const sendResponse = (res: Response, data: any) => {
  res.status(httpStatus.OK).json({
    success: data.success,
    status: data.status,
    message: data.message,
    data: data.data,
  });
};
