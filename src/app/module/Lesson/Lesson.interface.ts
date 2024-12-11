import { Types } from "mongoose";

export interface IVocabulary {
  lessonNo?: string;
  word: string;
  pronunciation: string;
  meaning:string;
  whenToSay: string;
  adminEmail: string;
}

export interface ILesson {
  id?: string;
  lessonName: string;
  lessonNumber: number;
  vocabulary: [IVocabulary];
  authId: Types.ObjectId;
}
