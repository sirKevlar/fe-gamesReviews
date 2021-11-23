import axios from "axios";

const boardGamesApi = axios.create({
  baseURL: "https://kpm-board-games.herokuapp.com/api",
});

export const getUsers = async () => {
  const usersObj = await boardGamesApi.get("/users");
  return usersObj.data.users;
};
