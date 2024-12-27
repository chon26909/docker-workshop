import { api } from "./axiosInstant";

export const getHello = async () => {
  return await api.get("/hello");
};
