import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { bookService } from "./book.service";
import { sendResponse } from "../../utils/sendResponse";

const createBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const bookDetails = req.body;

    const result = await bookService.createBookIntoDB(bookDetails, next);

    sendResponse(res, {
      success: true,
      status: 201,
      message: "Book Created Successfully!",
      data: result,
    });
  }
);

const getBooks = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const allBook = await bookService.getBooksFromDB(next);

    sendResponse(res, {
      success: true,
      status: 200,
      message: "All Book Data Retrieved Successfully!",
      data: allBook,
    });
  }
);

const getSingleBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { bookId } = req.params;
    const result = await bookService.getSingleBook(bookId, next);

    sendResponse(res, {
      success: true,
      status: 200,
      message: "Single Book Data Retrieved Successfully!",
      data: result,
    });
  }
);

const updateBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { bookId } = req.params;
    const updateData = req.body;
    const result = await bookService.updateBook(bookId, updateData, next);

    sendResponse(res, {
      success: true,
      status: 200,
      message: "Data Update Successfully!",
      data: result,
    });
  }
);

const deleteBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { bookId } = req.params;

    const result = await bookService.deleteBook(bookId, next);

    sendResponse(res, {
      success: true,
      status: 200,
      message: "Book Delete Successfully!",
      data: result,
    });
  }
);

export const bookController = {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
