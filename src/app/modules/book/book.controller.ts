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

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const result = await bookService.getSingleBook(bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Single Book Data Retrieved Successfully!",
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;
  const updateData = req.body;
  const result = await bookService.updateBook(bookId, updateData);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Data Update Successfully!",
    data: result,
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { bookId } = req.params;

  const result = await bookService.deleteBook(bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book Delete Successfully!",
    data: result,
  });
});

export const bookController = {
  createBook,
  getBooks,
  getSingleBook,
  updateBook,
  deleteBook
};
