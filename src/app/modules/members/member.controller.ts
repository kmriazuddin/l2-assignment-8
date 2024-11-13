import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { memberService } from "./member.service";
import { sendResponse } from "../../utils/sendResponse";

const createMember = catchAsync(async (req: Request, res: Response) => {
  const memberDetail = req.body;

  const result = await memberService.createMemberIntoDB(memberDetail);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Member Created Successfully!",
    data: result,
  });
});

const getMembers = catchAsync(async (req: Request, res: Response) => {
  const allMembers = await memberService.getAllMembersFromDB();

  sendResponse(res, {
    success: true,
    status: 200,
    message: "All Members Retrieved Successfully!",
    data: allMembers,
  });
});

const getSingleMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  const result = await memberService.getSingleMemberFromDB(memberId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member Retrieved Successfully!",
    data: result,
  });
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const updateData = req.body;
  const result = await memberService.updateMemberDB(memberId, updateData);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member Updated Successfully!",
    data: result,
  });
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;

  const result = await memberService.deleteMemberFromDB(memberId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member deleted successfully",
  });
});

export const memberController = {
  createMember,
  getMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
