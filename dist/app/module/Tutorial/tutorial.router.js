"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialRouter = void 0;
const express_1 = require("express");
const auth_1 = require("../../middleware/auth");
const auth_interface_1 = require("../Auth/auth.interface");
const tutorial_controller_1 = require("./tutorial.controller");
const router = (0, express_1.Router)();
router.post("/", (0, auth_1.auth)(auth_interface_1.TUser_Role.ADMIN), tutorial_controller_1.tutorialController.createTutorial);
router.get("/", (0, auth_1.auth)(auth_interface_1.TUser_Role.ADMIN, auth_interface_1.TUser_Role.USER), tutorial_controller_1.tutorialController.getTutorial);
router.delete("/delete/:id", (0, auth_1.auth)(auth_interface_1.TUser_Role.ADMIN), tutorial_controller_1.tutorialController.deleteTutorial);
router.patch("/update/:id", (0, auth_1.auth)(auth_interface_1.TUser_Role.ADMIN), tutorial_controller_1.tutorialController.updateTutorial);
exports.tutorialRouter = router;