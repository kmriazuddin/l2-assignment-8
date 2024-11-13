import { Prisma } from "@prisma/client";
import { prisma } from "../../config/prisma";
import { NextFunction } from "express";

const createBookIntoDB = async (bookDetails: any, next: NextFunction) => {
  try {
    const book: Prisma.BookCreateInput = await prisma.book.create({
      data: bookDetails,
    });
    return book;
  } catch (error) {
    next(error);
  }
};

const getBooksFromDB = async (next: NextFunction) => {
  try {
    const books: Prisma.BookCreateInput[] = await prisma.book.findMany({});
    return books;
  } catch (error) {
    next(error);
  }
};

const getSingleBook = async (id: string, next: NextFunction) => {
  try {
    const book = await prisma.book.findUniqueOrThrow({
      where: {
        bookId: id,
      },
    });
    return book;
  } catch (error) {
    next(error);
  }
};

const updateBook = async (id: string, updateData: any, next: NextFunction) => {
  try {
    const isExist = await prisma.book.findUniqueOrThrow({
      where: {
        bookId: id,
      },
    });

    const update = await prisma.book.update({
      where: {
        bookId: id,
      },
      data: {
        title: updateData.title,
        genre: updateData.genre,
        publishedYear: updateData.publishedYear,
        totalCopies: updateData.totalCopies,
        availableCopies: updateData.availableCopies,
      },
    });

    return update;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Requested Id Not Found!");
    }
  }
};

const deleteBook = async (id: string, next: NextFunction) => {
  try {
    await prisma.book.findUniqueOrThrow({
      where: {
        bookId: id,
      },
    });

    const deletedData = await prisma.book.delete({
      where: {
        bookId: id,
      },
    });

    return deletedData;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error("Requested Id Not Found!");
    }
  }
};

export const bookService = {
  createBookIntoDB,
  getBooksFromDB,
  getSingleBook,
  updateBook,
  deleteBook,
};
