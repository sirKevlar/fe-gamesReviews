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
                <h6 className="slug">{category.slug}</h6>
              </div>
            );
          })}
        </div>
        <div className="sidenav-bottom white">
          <div className="sidenav-bottom-top">
            <h6 className="white sort-title">Sort By:</h6>
            <div className="sort-radio">
              <div className="radio-pairs">
                <input type="radio" name="sort-by" value="title" />
                <label className="radio-label" htmlFor="title">
                  TITLE
                </label>
              </div>
              <div className="radio-pairs">
                <input type="radio" name="sort-by" value="owner" />
                <label className="radio-label" htmlFor="owner">
                  OWNER
                </label>
              </div>
              <div className="radio-pairs">
                <input type="radio" name="sort-by" value="created" />
                <label className="radio-label" htmlFor="created">
                  CREATED
                </label>
              </div>
              <div className="radio-pairs">
                <input type="radio" name="sort-by" value="votes" />
                <label className="radio-label" htmlFor="votes">
                  VOTES
                </label>
              </div>
            </div>
          </div>
          <div className="sidenav-bottom-bottom">
            <h6 className="white sort-title">Order By:</h6>
            <div className="sort-radio">
              <div className="radio-pairs">
                <input type="radio" name="order" value="asc" />
                <label className="radio-label" htmlFor="asc">
                  ASC
                </label>
              </div>
              <div className="radio-pairs">
                <input type="radio" name="order" value="desc" />
                <label className="radio-label" htmlFor="desc">
                  DESC
                </label>
              </div>
            </div>
          </div>
        </div>
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
