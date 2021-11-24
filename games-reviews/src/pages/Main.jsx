import React from "react";
import { Routes, Route } from "react-router-dom";
import Reviews from "./Reviews";
import ReviewById from "./ReviewById";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Reviews />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/reviews/:reviewId" element={<ReviewById />} />
      </Routes>
    </div>
  );
}
