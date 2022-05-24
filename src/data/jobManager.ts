import { IsJobList } from "../interfaces";

export const getList = async (): Promise<IsJobList> => {
  const response = await fetch("./data.json");
  return await response.json();
};
