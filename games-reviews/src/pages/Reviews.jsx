import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FancyCard from "../components/FancyCard";
import SideNav from "../components/SideNav";
import UpVote from "../components/UpVote";
import {
  getReviews,
  getCategories,
  getReviewsByCategory,
} from "../utils/apiCall";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h2>Be Patient...</h2>;

  return (
    <main>
      <SideNav>
        <div className="sidenav-top">
          {categories.map((category) => {
            return (
              <div
                onClick={(e) => {
                  getReviewsByCategory(category.slug).then((reviews) => {
                    setReviews(reviews);
                  });
                }}
                className="category"
                value={category.slug}
                id={category.slug}
                key={category.slug}
              >
                <h6>{category.slug}</h6>
              </div>
            );
          })}
        </div>
        <div className="sidenav-bottom">m</div>
      </SideNav>
      <h2>Reviews...</h2>

      {reviews.map((review) => {
        const reviewUrl = `/reviews/${review.review_id}`;

        return (
          <div key={review.title} className="rev-card">
            <FancyCard>
              <div className="review-sub-one">
                <Link className="link" to={reviewUrl}>
                  <img
                    src={review.review_img_url}
                    alt={review.title}
                    className="review-image"
                  />
                </Link>
                <UpVote id={review.review_id} reviewVotes={review.votes} />
              </div>
              <h4>{review.title}</h4>
            </FancyCard>
          </div>
        );
      })}
    </main>
  );
}
