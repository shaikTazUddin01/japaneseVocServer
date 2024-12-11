import { Types } from "mongoose";

export interface ILesson {
    
    lessonName: string;
    lessonNumber: number;
    authId: Types.ObjectId;
  }
  