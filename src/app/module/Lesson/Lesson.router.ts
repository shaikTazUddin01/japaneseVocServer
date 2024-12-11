import { Router } from "express"
import { lessonController } from "./Lesson.controller"




const router = Router()

router.post('/createLesson',lessonController.createLesson)


export const lessonRoter = router