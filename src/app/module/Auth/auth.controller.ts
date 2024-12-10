import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authService } from "./auth.service";
import { StatusCodes } from "http-status-codes";

const createUser = catchAsync(async (req, res) => {
  
  const {data}=req.body;
  const file=req?.file?.path

  const result = await authService.createUserInFoDB(JSON.parse(data),file as string);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "created success",
    data: result,
  });
});

export const authController = {
  createUser,
 
};