import { Prisma } from "@prisma/client";
import { prisma } from "../../config/prisma";

const createMemberIntoDB = async (memberDetails: any) => {
  const member: Prisma.MemberCreateInput = await prisma.member.create({
    data: memberDetails,
  });

  return member;
};

const getAllMembersFromDB = async () => {
  const members: Prisma.MemberCreateInput[] = await prisma.member.findMany({});
  return members;
};

const getSingleMemberFromDB = async (id: string) => {
  const member: Prisma.MemberCreateInput =
    await prisma.member.findUniqueOrThrow({
      where: {
        memberId: id,
      },
    });

  return member;
};

const updateMemberDB = async (id: string, updatedData: any) => {
  const isExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const updated = await prisma.member.update({
    where: {
      memberId: id,
    },
    data: {
      name: updatedData.name,
      email: updatedData.email,
      phone: updatedData.phone,
    },
  });

  return updated;
};

const deleteMemberFromDB = async (id: string) => {
  const isExist = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const deletedData = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });
};

export const memberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberDB,
  deleteMemberFromDB,
};
