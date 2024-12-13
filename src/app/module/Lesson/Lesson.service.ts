import mongoose from "mongoose";
import { ILesson, IVocabulary } from "./Lesson.interface";
import { Lesson } from "./Lesson.model";
import { AppError } from "../../error/AppError";
import { StatusCodes } from "http-status-codes";

const createLesson = async (data: ILesson) => {

  const isLessonNo=await Lesson.findOne({lessonNumber:data?.lessonNumber})
// check is lesson no is already exists
  if (isLessonNo) {
    throw new AppError(StatusCodes.BAD_REQUEST,"Already used the some lesson no. Please try to with another Lesson Number")
  }
  const isExistslessonName=await Lesson.findOne({lessonName:data?.lessonName})
// check is lesson name is already exists
  if (isExistslessonName) {
    throw new AppError(StatusCodes.BAD_REQUEST,"Already used the some lesson Name. Please try with to another Lesson Name")
  }
  const res = await Lesson.create(data);
  return res;
};
const getLesson = async () => {
  const res = await Lesson.find().populate("authId");
  return res;
};
const getSpecificLesson = async (id:string) => {
  const res = await Lesson.findOne({_id:id}).populate("authId");
  return res;
};
const deleteLesson = async (id: string) => {
  const res = await Lesson.findByIdAndDelete(id);
  return res;
};
const updateLesson = async (id: string, data: ILesson) => {
  const res = await Lesson.findByIdAndUpdate(id, data, { new: true });
  return res;
};
// added vocabulary
const addVoc = async (data: IVocabulary) => {
  const vocabulary = {
    word: data?.word,
    pronunciation: data?.pronunciation,
    whenToSay: data?.whenToSay,
    adminEmail: data?.adminEmail,
    meaning: data?.meaning,
  };
  // console.log(data,"-->",vocabulary);
  const res = await Lesson.updateOne(
    { lessonNumber: data?.lessonNo },
    { $addToSet: { vocabulary: vocabulary } },
    { new: true }
  );
  // console.log(res);
  return res;
};
// delete vocabulary
const deleteVoc = async (data: any) => {
  const res = await Lesson.updateOne(
    { _id: data?.lessonId },
    { $pull: { vocabulary: { _id: data?.vocabularyId } } },
    { new: true }
  );
  return res;
};
// update vocabulary
// const updateVoc = async (data: any) => {
//   const lessonId = new mongoose.Types.ObjectId(data?.lessonId);
//   const vocId = new mongoose.Types.ObjectId(data?.vocId);
//   const updateData = data?.data;
//   //   console.log(lessonId,vocId,updateData);

// // console.log("-->",data);
// // data-->
// //  lessonId: '6759e3cc50dcb60fb6c24351',
// // vocId: '675b0f523bffdec7eb89ef8d',
// // data: {
// //   word: 'こんにちは',
// //   pronunciation: 'Konnichiwas',
// //   meaning: 'Hello',
// //   whenToSay: 'Used as a daytime greeting',
// //   LessonNo: '2'
// // }
// // }

// if (data?.data?.LessonNo) {
// const find =await Lesson.findOne({_id:data?.lesson ,vocabulary._id:vocId})

//   // const res = await Lesson.updateOne(
//   //   { _id: data?.lessonId },
//   //   { $pull: { vocabulary: { _id: data?.vocId } } },
//   //   { new: true }
//   // );

//   // if (res) {
//   //   const res = await Lesson.updateOne(
//   //     { lessonNumber: data?.lessonNo },
//   //     { $addToSet: { vocabulary: vocabulary } },
//   //     { new: true }
//   //   );
//   // }
// }

//   const res = await Lesson.updateOne(
//     { _id: lessonId, "vocabulary._id": vocId },
//     {
//       $set: {
//         "vocabulary.$": updateData,
//       },
//     },
//     { new: true }
//   );
//   return res;
// };

const updateVoc = async (data: any) => {
  const lessonId = data?.lessonId;
  const vocId = data?.vocId;
  const updateData = data?.data;

  if (data?.data?.LessonNo) {
    // Check if LessonNo is different
    const currentLesson = await Lesson.findOne({
      _id: lessonId,
      "vocabulary._id": vocId,
    });

    if (currentLesson && currentLesson.lessonNumber !== data.data.LessonNo) {
      // Remove vocabulary from the current lesson
      await Lesson.updateOne(
        { _id: lessonId },
        { $pull: { vocabulary: { _id: vocId } } }
      );

      // Add vocabulary to the new lesson
      await Lesson.updateOne(
        { lessonNumber: data.data.LessonNo },
        { $addToSet: { vocabulary: updateData } }
      );

      return { message: "Vocabulary moved to a new lesson." };
    }
  }

  // Update vocabulary in the same lesson
  const res = await Lesson.updateOne(
    { _id: lessonId, "vocabulary._id": vocId },
    {
      $set: {
        "vocabulary.$": updateData,
      },
    },
    { new: true }
  );

  return res;
};



export const lessonService = {
  createLesson,
  getSpecificLesson,
  getLesson,
  deleteLesson,
  updateLesson,
  addVoc,
  deleteVoc,
  updateVoc,
};
