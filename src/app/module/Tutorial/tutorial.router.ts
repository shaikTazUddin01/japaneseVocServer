import { Router } from "express";
import { auth } from "../../middleware/auth";
import { TUser_Role } from "../Auth/auth.interface";
import { tutorialController } from "./tutorial.controller";

const router = Router();

router.post("/", auth(TUser_Role.ADMIN), tutorialController.createTutorial);
router.get(
  "/",
  auth(TUser_Role.ADMIN, TUser_Role.USER),
  tutorialController.getTutorial
);
router.delete(
  "/delete/:id",
  auth(TUser_Role.ADMIN),
  tutorialController.deleteTutorial
);
router.patch(
  "/update/:id",
  auth(TUser_Role.ADMIN),
  tutorialController.updateTutorial
);

export const tutorialRouter = router;
