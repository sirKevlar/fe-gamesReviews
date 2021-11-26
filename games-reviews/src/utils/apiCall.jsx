import axios from "axios";

const boardGamesApi = axios.create({
  baseURL: "https://kpm-board-games.herokuapp.com/api",
});

export const getUsers = async () => {
  const usersObj = await boardGamesApi.get("/users");
  return usersObj.data.users;
};

export const getReviews = async (category, sort, order = "desc") => {
  let path = "/reviews";

  if (category) path += `?category=${category}`;
  if (!category && sort) path += `?sort_by=${sort}`;
  if (category && sort) path += `&sort_by=${sort}`;
  if (!category && !sort) path += `?order=${order}`;
  if (category || sort) path += `&order=${order}`;

  const reviewsObj = await boardGamesApi.get(path);
  return reviewsObj.data.reviews;
};

export const getReviewById = async (id) => {
  const reviewObj = await boardGamesApi.get(`/reviews/${id}`);
  return reviewObj.data.review;
};

export const getCommentsByReviewId = async (id) => {
  const commentObj = await boardGamesApi.get(`/reviews/${id}/comments`);
  return commentObj.data.comments;
};

export const postComment = async (reviewId, comment) => {
  console.log(comment);
  const confirmation = await boardGamesApi.post(
    `/reviews/${reviewId}/comments`,
    comment
  );
  return confirmation.data;
};

export const upVote = async (id, type) => {
  if (type === "comment") {
    const confirmation = await boardGamesApi.patch(`/comments/${id}`, {
      inc_votes: 1,
    });
    return confirmation.data;
  } else {
    console.log(`${type} up voting not yet supported. Sort the BE out Kev!`);
  }
};

export const downVote = async (id, type) => {
  if (type === "comment") {
    const confirmation = await boardGamesApi.patch(`/comments/${id}`, {
      inc_votes: -1,
    });
    return confirmation.data;
  } else {
    console.log(`${type} down voting not yet supported. Sort the BE out Kev!`);
  }
};

export const getCategories = async () => {
  const categoryObj = await boardGamesApi.get("/categories");
  return categoryObj.data.categories;
};
