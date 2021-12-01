import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Reviews from "./Reviews";
import ReviewById from "./ReviewById";
import Users from "./Users";

export default function Main({ reviews, setReviews, usersFromApi }) {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Reviews
              reviews={reviews}
              setReviews={setReviews}
              categories={categories}
              setCategories={setCategories}
            />
          }
        />
        <Route
          exact
          path="/reviews"
          element={
            <Reviews
              reviews={reviews}
              setReviews={setReviews}
              categories={categories}
              setCategories={setCategories}
            />
          }
        />
        <Route exact path="/reviews/:reviewId" element={<ReviewById />} />
        <Route
          exact
          path="/users"
          element={<Users usersFromApi={usersFromApi} />}
        />
      </Routes>
    </div>
  );
}
