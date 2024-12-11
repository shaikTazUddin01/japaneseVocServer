import { Router } from "express"
import { lessonController } from "./Lesson.controller"
import { auth } from "../../middleware/auth"
import { TUser_Role } from "../Auth/auth.interface"




const router = Router()

router.post('/createLesson',auth(TUser_Role?.ADMIN),lessonController.createLesson)
router.get('/',lessonController.getLesson)
router.delete('/delete/:id',lessonController.deleteLesson)
router.patch('/updatelesson/:id',lessonController.updateLesson)


export const lessonRoter = router