import { ITutorial } from "./tutorial.interface";
import { Tutorial } from "./tutorial.model";

const createTutorial = async (data: ITutorial) => {
  const res = await Tutorial.create(data);
  return res;
};
const getTutorial = async () => {
  const res = await Tutorial.find().populate("authId");
  return res;
};

const deleteTutorial = async (id: string) => {
  const res = await Tutorial.findByIdAndDelete(id);
  return res;
};

const updateTutorial = async (id: string, data: Partial<ITutorial>) => {
  const res = await Tutorial.findByIdAndUpdate(id, data, { new: true });
  return res;
};

export const tutorialService = {
  createTutorial,
  getTutorial,
  deleteTutorial,
  updateTutorial,
};
