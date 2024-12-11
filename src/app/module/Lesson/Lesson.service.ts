import { ILesson } from "./Lesson.interface";
import { Lesson } from "./Lesson.model"

const createLesson=async(data:ILesson)=>{
    const res=await Lesson.create(data);
    return res
}
const getLesson=async()=>{
    const res=await Lesson.find().populate("authId");
    return res
}
const deleteLesson=async(id:string)=>{
    const res=await Lesson.findByIdAndDelete(id);
    return res
}
const updateLesson=async(data:ILesson)=>{
    const res=await Lesson.findByIdAndUpdate(data?.id,{data},{new:true});
    return res
}


export const lessonService={
    createLesson,
    getLesson,
    deleteLesson,
    updateLesson
}