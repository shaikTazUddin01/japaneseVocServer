import { Router } from "express"
import { lessonController } from "./Lesson.controller"
import { auth } from "../../middleware/auth"
import { TUser_Role } from "../Auth/auth.interface"




const router = Router()

router.post('/createLesson',auth(TUser_Role?.ADMIN),lessonController.createLesson)
router.get('/',lessonController.getLesson)
router.get('/:id',lessonController.getSpecipicLesson)
router.delete('/delete/:id',auth(TUser_Role?.ADMIN),lessonController.deleteLesson)
router.patch('/updatelesson/:id',auth(TUser_Role?.ADMIN),lessonController.updateLesson)
router.patch('/addeeVoca',auth(TUser_Role?.ADMIN),lessonController.addVoc)
router.delete('/deleteVoca',auth(TUser_Role?.ADMIN),lessonController.deleteVoc)
router.patch('/updateVoca',auth(TUser_Role?.ADMIN),lessonController.updateVoc)


export const lessonRoter = router