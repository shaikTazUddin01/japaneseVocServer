import { ILesson } from "./Lesson.interface";
import { Lesson } from "./Lesson.model"

const createLesson=async(data:ILesson)=>{

    

    const res=await Lesson.create(data);

    return res
}


export const lessonService={
    createLesson
}