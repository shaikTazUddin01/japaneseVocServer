import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { tutorialService } from "./tutorial.service";

const createTutorial = catchAsync(async (req, res) => {
  const result = await tutorialService.createTutorial(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "created success",
    data: result,
  });
});
const getTutorial = catchAsync(async (req, res) => {
  const result = await tutorialService.getTutorial();
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "retrieve success",
    data: result,
  });
});
const deleteTutorial = catchAsync(async (req, res) => {
    const id=req.params.id
  const result = await tutorialService.deleteTutorial(id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "delete success",
    data: result,
  });
});

const updateTutorial = catchAsync(async (req, res) => {
    const id=req.params.id
  const result = await tutorialService.updateTutorial(id,req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "update success",
    data: result,
  });
});


export const tutorialController={
    createTutorial,
    getTutorial,
    deleteTutorial,updateTutorial
}