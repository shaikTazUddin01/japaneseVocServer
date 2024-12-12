import { model, Schema } from "mongoose";
import { ITutorial } from "./tutorial.interface";

const tutorialSchema = new Schema<ITutorial>({
   videoLink:{type:String,required:true},
   authId:{type:Schema.Types.ObjectId,ref:'User',required:true}
  });

  export const Tutorial =model<ITutorial>("tutorial",tutorialSchema)
  