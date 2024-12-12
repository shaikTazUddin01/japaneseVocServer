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
const getSpecipicLesson = catchAsync(async (req, res) => {
  const {id}=req.params
  const result = await lessonService.getSpecificLesson(id);
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
    data: result,
  });
});

const addVoc = catchAsync(async (req, res) => {
  const result = await lessonService.addVoc(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Vocabulary added success",
    data: result,
  });
});
const deleteVoc = catchAsync(async (req, res) => {
  const result = await lessonService.deleteVoc(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Vocabulary deleted",
    data: result,
  });
});
// update vocabulary
const updateVoc = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await lessonService.updateVoc(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Vocabulary updated",
    data: result,
  });
});


export const lessonController={
    createLesson,
    getLesson,
    getSpecipicLesson,
    deleteLesson,
    updateLesson,
    addVoc,
    deleteVoc,
    updateVoc
}