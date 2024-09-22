import { post } from "../lib/api.js";

export const register = async (data) => {
  return await post("/auth/signup", data);
};

export const login = async (data) => {
  return await post("/auth/signin", data);
};
