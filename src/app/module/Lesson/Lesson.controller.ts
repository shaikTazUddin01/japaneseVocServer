import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { lessonService } from "./Lesson.service";

const createLesson = catchAsync(async (req, res) => {
  const result = await lessonService.createLesson(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "created success",
    data: result,
  });
});


export const lessonController={
    createLesson
}