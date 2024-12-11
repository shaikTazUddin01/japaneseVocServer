import { model, Schema } from "mongoose";
import { ILesson, IVocabulary } from "./Lesson.interface";

const vocabularySchema = new Schema<IVocabulary>({
  word: { type: String, required: true },
  pronunciation: { type: String, required: true },
  whenToSay: { type: String, required: true },
  adminEmail: { type: String, required: true },
});

const lessonSchema = new Schema<ILesson>({
  lessonName: { type: String, required: true, unique: true },
  lessonNumber: { type: Number, required: true, unique: true },
  authId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  vocabulary: { type: [vocabularySchema], default: [], ref: "User" },
});

export const Lesson = model<ILesson>("lesson", lessonSchema);
