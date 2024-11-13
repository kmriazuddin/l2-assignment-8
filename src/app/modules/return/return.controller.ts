import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { returnService } from "./return.service";
import { sendResponse } from "../../utils/sendResponse";

const returnBook = catchAsync(async (req: Request, res: Response) => {
  const borrowId = req.body;

  const result = await returnService.returnBook(borrowId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book Return Successfully!",
  });
});

export const returnController = {
  returnBook,
};
