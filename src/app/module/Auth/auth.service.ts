import { AppError } from "../../error/AppError";
import { IAuth } from "./auth.interface";
import { Auth } from "./auth.model";
import { StatusCodes } from "http-status-codes";

// create new user
const createUserInFoDB = async (data: IAuth, profileImage: string) => {
  
  data.image = profileImage;
  const isUserExists = await Auth.findOne({ email: data?.email });
  if (isUserExists) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      "This user already exists.try with another E-mail"
    );
  }
  // // create user
  data.role = "USER";

 
  const res = await Auth.create(data);
  return res;
};

export const authService = {
  createUserInFoDB,
};
