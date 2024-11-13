import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { borrowService } from "./borrow.service";
import { sendResponse } from "../../utils/sendResponse";

const borrowBook = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowService.borrowBook(req.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book Borrowed Successfully!",
    data: result,
  });
});

const overdueBook = catchAsync(async (req: Request, res: Response) => {
  const result = await borrowService.overdueBook();
  const message =
    result.length > 0 ? "Overdue borrow list fetched" : "No overdue book";

  sendResponse(res, {
    success: true,
    status: 200,
    message: message,
    data: result,
  });
});

export const borrowController = {
  borrowBook,
  overdueBook,
};
