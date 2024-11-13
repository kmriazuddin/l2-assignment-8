import { Prisma } from "@prisma/client";
import { prisma } from "../../config/prisma";

const createBookIntoDB = async (bookDetails: any) => {
  const book: Prisma.BookCreateInput = await prisma.book.create({
    data: bookDetails,
  });
  return book;
};

const getBooksFromDB = async () => {
  const books: Prisma.BookCreateInput[] = await prisma.book.findMany({});
  return books;
};

export const bookService = {
  createBookIntoDB,
  getBooksFromDB,
};
