"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessonService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Lesson_model_1 = require("./Lesson.model");
const createLesson = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Lesson_model_1.Lesson.create(data);
    return res;
});
const getLesson = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Lesson_model_1.Lesson.find().populate("authId");
    return res;
});
const deleteLesson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Lesson_model_1.Lesson.findByIdAndDelete(id);
    return res;
});
const updateLesson = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Lesson_model_1.Lesson.findByIdAndUpdate(id, data, { new: true });
    return res;
});
// added vocabulary
const addVoc = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const vocabulary = {
        word: data === null || data === void 0 ? void 0 : data.word,
        pronunciation: data === null || data === void 0 ? void 0 : data.pronunciation,
        whenToSay: data === null || data === void 0 ? void 0 : data.whenToSay,
        adminEmail: data === null || data === void 0 ? void 0 : data.adminEmail,
        meaning: data === null || data === void 0 ? void 0 : data.meaning,
    };
    // console.log(data,"-->",vocabulary);
    const res = yield Lesson_model_1.Lesson.updateOne({ lessonNumber: data === null || data === void 0 ? void 0 : data.lessonNo }, { $addToSet: { vocabulary: vocabulary } }, { new: true });
    return res;
});
// delete vocabulary
const deleteVoc = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield Lesson_model_1.Lesson.updateOne({ _id: data === null || data === void 0 ? void 0 : data.lessonId }, { $pull: { vocabulary: { _id: data === null || data === void 0 ? void 0 : data.vocabularyId } } }, { new: true });
    return res;
});
// delete vocabulary
const updateVoc = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const lessonId = new mongoose_1.default.Types.ObjectId(data === null || data === void 0 ? void 0 : data.lessonId);
    const vocId = new mongoose_1.default.Types.ObjectId(data === null || data === void 0 ? void 0 : data.vocId);
    const updateData = data === null || data === void 0 ? void 0 : data.data;
    //   console.log(lessonId,vocId,updateData);
    const res = yield Lesson_model_1.Lesson.updateOne({ _id: lessonId, "vocabulary._id": vocId }, {
        $set: {
            "vocabulary.$": updateData,
        },
    }, { new: true });
    // const res = await Lesson.find({ _id: lessonId})
    //   console.log(res);
    return res;
});
exports.lessonService = {
    createLesson,
    getLesson,
    deleteLesson,
    updateLesson,
    addVoc,
    deleteVoc,
    updateVoc,
};
