import { Router } from "express"
import { multerUpload } from "../../config/multer.config"
import { authController } from "./auth.controller"



const router = Router()

router.post('/createUser'
    ,multerUpload.single('image')
,authController.createUser)
// router.post('/createUser',authController.createUser)


export const authRouter = router