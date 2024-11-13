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

const getSingleBook = async (id: string) => {
  const book = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });
  return book;
};

const updateBook = async (id: string, updateData: any) => {
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
};

const deleteBook = async (id: string) => {
  const isExist = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  const deletedData = await prisma.book.delete({
    where: {
      bookId: id,
    },
  });
};

export const bookService = {
  createBookIntoDB,
  getBooksFromDB,
  getSingleBook,
  updateBook,
  deleteBook
};
