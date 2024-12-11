import { ILesson, IVocabulary } from "./Lesson.interface";
import { Lesson } from "./Lesson.model";

const createLesson = async (data: ILesson) => {
  const res = await Lesson.create(data);
  return res;
};
const getLesson = async () => {
  const res = await Lesson.find().populate("authId");
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
const addVoc = async ( data: IVocabulary) => {
const vocabulary={
    word: data?.word,
    pronunciation: data?.pronunciation,
    whenToSay: data?.whenToSay,
    adminEmail: data?.adminEmail,
}
  const res = await Lesson.updateOne({lessonNumber:data?.lessonNo}, {vocabulary:vocabulary}, { new: true });
  return res;
};

export const lessonService = {
  createLesson,
  getLesson,
  deleteLesson,
  updateLesson,
  addVoc
};
