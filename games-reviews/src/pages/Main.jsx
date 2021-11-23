import React from "react";
import { Routes, Route } from "react-router-dom";
import Reviews from "./Reviews";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Reviews />} />
      </Routes>
    </div>
  );
}
