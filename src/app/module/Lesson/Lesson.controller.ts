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
const getLesson = catchAsync(async (req, res) => {
  const result = await lessonService.getLesson();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "retrieve success",
    data: result,
  });
});
const deleteLesson = catchAsync(async (req, res) => {
    const id=req?.params?.id
  const result = await lessonService.deleteLesson(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "delete success",
    data: result,
  });
});
const updateLesson = catchAsync(async (req, res) => {


  const {id}=req.params

  const result = await lessonService.updateLesson(id,req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "update success",
    data: null,
  });
});


export const lessonController={
    createLesson,
    getLesson,
    deleteLesson,
    updateLesson
}