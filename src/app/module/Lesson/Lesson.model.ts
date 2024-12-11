
import { model, Schema } from "mongoose";
import { ILesson } from "./Lesson.interface";

const lessonSchema = new Schema<ILesson>({
  lessonName: { type: String, required: true, unique: true },
  lessonNumber: { type: Number, required: true },
  authId: { type: Schema.Types.ObjectId, required: true ,ref:"User" },

});


export const Lesson = model<ILesson>("lesson", lessonSchema);
