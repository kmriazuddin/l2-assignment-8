import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookService } from "./book.service";
import { sendResponse } from "../../utils/sendResponse";

const createBook = catchAsync(async (req: Request, res: Response) => {
  const bookDetails = req.body;

  const result = await bookService.createBookIntoDB(bookDetails);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book Created Successfully!",
    data: result,
  });
});

const getBooks = catchAsync(async (req: Request, res: Response) => {
  const allBook = await bookService.getBooksFromDB();

  sendResponse(res, {
    success: true,
    status: 200,
    message: "All Book Data Retrieved Successfully!",
    data: allBook,
  });
});

export const bookController = {
  createBook,
  getBooks
};
