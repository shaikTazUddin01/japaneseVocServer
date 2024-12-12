import { Router } from 'express'
import { authRouter } from '../module/Auth/auth.router'
import { lessonRoter } from '../module/Lesson/Lesson.router'
import { tutorialRouter } from '../module/Tutorial/tutorial.router'

const router = Router()

const modulesRoutes = [
  {
    path: '/auth',
    pathRoute: authRouter,
  },
  {
    path: '/lesson',
    pathRoute: lessonRoter,
  },
  {
    path: '/tutorial',
    pathRoute: tutorialRouter,
  },
  
]

modulesRoutes.forEach(route => router.use(route?.path, route?.pathRoute))

export default router