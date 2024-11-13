import { prisma } from "../../config/prisma";
import moment from "moment";

const borrowBook = async (borrowBookData: any) => {
  const bookExist = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: borrowBookData.bookId,
    },
  });
  const memberExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: borrowBookData.memberId,
    },
  });
  const borrowData = await prisma.borrowRecord.create({
    data: borrowBookData,
  });
  return borrowData;
};

const overdueBook = async () => {
  const overdue = await prisma.borrowRecord.findMany({
    include: {
      book: true,
      member: true,
    },
  });
  const overDueBooks = overdue.map((book: any) => {
    let overdueBook;
    const overDueDay = Math.abs(
      14 -
        Math.floor(
          (new Date(
            book.returnDate.getTime() - book.borrowDate.getTime()
          ) as any) /
            (1000 * 60 * 60 * 24)
        )
    );
    if (overDueDay > 0) {
      overdueBook = {
        borrowId: book.borrowId,
        bookTittle: book.book.title,
        borrowerName: book.member.name,
        overdueDays: overDueDay,
      };
    }
    return overdueBook;
  });

  return overDueBooks;
};

export const borrowService = {
  borrowBook,
  overdueBook,
};
