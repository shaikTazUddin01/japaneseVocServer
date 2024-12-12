import { Types } from "mongoose";

export interface ITutorial{
    videoLink:string,
    authId:Types.ObjectId
}