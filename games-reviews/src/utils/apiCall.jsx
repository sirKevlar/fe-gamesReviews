import axios from "axios";

const boardGamesApi = axios.create({
  baseURL: "https://kpm-board-games.herokuapp.com/api",
});

export const getUsers = async () => {
  const usersObj = await boardGamesApi.get("/users");
  return usersObj.data.users;
};

export const getReviews = async () => {
  const reviewsObj = await boardGamesApi.get("/reviews");
  return reviewsObj.data.reviews;
};

export const getReviewById = async (id) => {
  const reviewObj = await boardGamesApi.get(`/reviews/${id}`);
  return reviewObj.data.review;
};

export const getReviewsByCategory = async (category) => {
  const reviewsObj = await boardGamesApi.get(`/reviews?category=${category}`);
  return reviewsObj.data.reviews;
};

export const upVote = async () => {
  console.log("upVOTE");
};
export const downVote = async () => {
  console.log("downVOTE");
};

export const getCategories = async () => {
  const categoryObj = await boardGamesApi.get("/categories");
  return categoryObj.data.categories;
};
