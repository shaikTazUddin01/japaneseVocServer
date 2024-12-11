import { Types } from "mongoose";

export interface IVocabulary {
  word: string;
  pronunciation: string;
  whenToSay: string;
  adminId: Types.ObjectId;
}

export interface ILesson {
  id?: string;
  lessonName: string;
  lessonNumber: number;
  vocabulary: [IVocabulary];
  authId: Types.ObjectId;
}
