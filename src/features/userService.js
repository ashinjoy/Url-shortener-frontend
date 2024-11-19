
import { axiosInstance } from "../utils/axios";

export const userSignupService = async (data) => {
  try {
    console.log(data);
    
    const response =  await axiosInstance.post("/signup", data);
    console.log('response',response);
    return response
  } catch (error) {
    console.log(error);
    
    throw error;
  }
};

export const userLoginService = async (data) => {
  try {
    return await axiosInstance.post("/login", data);
  } catch (error) {
    throw error;
  }
};

export const shortenUrlService = async (data) => {
  try {
    return await axiosInstance.post("/short-url", data);
  } catch (error) {
    console.error(error);
    throw error
  }
};
