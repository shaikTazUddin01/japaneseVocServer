"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonRoter = void 0;
const express_1 = require("express");
const Lesson_controller_1 = require("./Lesson.controller");
const auth_1 = require("../../middleware/auth");
const auth_interface_1 = require("../Auth/auth.interface");
const router = (0, express_1.Router)();
router.post('/createLesson', (0, auth_1.auth)(auth_interface_1.TUser_Role === null || auth_interface_1.TUser_Role === void 0 ? void 0 : auth_interface_1.TUser_Role.ADMIN), Lesson_controller_1.lessonController.createLesson);
router.get('/', Lesson_controller_1.lessonController.getLesson);
router.delete('/delete/:id', (0, auth_1.auth)(auth_interface_1.TUser_Role === null || auth_interface_1.TUser_Role === void 0 ? void 0 : auth_interface_1.TUser_Role.ADMIN), Lesson_controller_1.lessonController.deleteLesson);
router.patch('/updatelesson/:id', (0, auth_1.auth)(auth_interface_1.TUser_Role === null || auth_interface_1.TUser_Role === void 0 ? void 0 : auth_interface_1.TUser_Role.ADMIN), Lesson_controller_1.lessonController.updateLesson);
router.patch('/addeeVoca', (0, auth_1.auth)(auth_interface_1.TUser_Role === null || auth_interface_1.TUser_Role === void 0 ? void 0 : auth_interface_1.TUser_Role.ADMIN), Lesson_controller_1.lessonController.addVoc);
router.delete('/deleteVoca', (0, auth_1.auth)(auth_interface_1.TUser_Role === null || auth_interface_1.TUser_Role === void 0 ? void 0 : auth_interface_1.TUser_Role.ADMIN), Lesson_controller_1.lessonController.deleteVoc);
router.patch('/updateVoca', (0, auth_1.auth)(auth_interface_1.TUser_Role === null || auth_interface_1.TUser_Role === void 0 ? void 0 : auth_interface_1.TUser_Role.ADMIN), Lesson_controller_1.lessonController.updateVoc);
exports.lessonRoter = router;
