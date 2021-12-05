import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FancyCard from "../components/FancyCard";
import SideNav from "../components/SideNav";
import UpVote from "../components/UpVote";
import ReviewForm from "../components/ReviewForm";
import AddReviewButton from "../components/AddReviewButton";
import { getReviews, getCategories } from "../utils/apiCall";

export default function Reviews({
  reviews,
  setReviews,
  categories,
  setCategories,
  selectedCategory,
  setSelectedCategory,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [reviewFormIsOpen, setReviewFormIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [setReviews]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, [setCategories]);

  if (isLoading) return <h2>Be Patient...</h2>;

  return (
    <main>
      <SideNav>
        <div className="sidenav-top">
          {categories.map((category) => {
            return (
              <div
                onClick={(e) => {
                  setSelectedCategory(category.slug);
                  getReviews(category.slug).then((reviews) => {
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
            <h5 className="white sort-title">Sort By:</h5>
            <div className="sort-radio">
              <div className="sort-radio-left">
                <div className="radio-pairs">
                  <input
                    onChange={({ target: { value } }) => {
                      setSortBy(value);
                      getReviews(selectedCategory, value, order).then(
                        (reviewsFromApi) => {
                          setReviews(reviewsFromApi);
                        }
                      );
                    }}
                    type="radio"
                    name="sort-by"
                    value="title"
                  />
                  <label className="radio-label" htmlFor="title">
                    TITLE
                  </label>
                </div>
                <div className="radio-pairs">
                  <input
                    onChange={({ target: { value } }) => {
                      setSortBy(value);
                      getReviews(selectedCategory, value, order).then(
                        (reviewsFromApi) => {
                          setReviews(reviewsFromApi);
                        }
                      );
                    }}
                    type="radio"
                    name="sort-by"
                    value="votes"
                  />
                  <label className="radio-label" htmlFor="votes">
                    VOTES
                  </label>
                </div>
              </div>
              <div className="sort-radio-right">
                <div className="radio-pairs">
                  <input
                    onChange={({ target: { value } }) => {
                      setSortBy(value);
                      getReviews(selectedCategory, value, order).then(
                        (reviewsFromApi) => {
                          setReviews(reviewsFromApi);
                        }
                      );
                    }}
                    type="radio"
                    name="sort-by"
                    value="owner"
                  />
                  <label className="radio-label" htmlFor="owner">
                    OWNER
                  </label>
                </div>
                <div className="radio-pairs">
                  <input
                    onChange={({ target: { value } }) => {
                      setSortBy(value);
                      getReviews(selectedCategory, value, order).then(
                        (reviewsFromApi) => {
                          setReviews(reviewsFromApi);
                        }
                      );
                    }}
                    type="radio"
                    name="sort-by"
                    value="created_at"
                  />
                  <label className="radio-label" htmlFor="created">
                    CREATED
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="sidenav-bottom-bottom">
            <h5 id="order-by" className="white sort-title">
              Order By:
            </h5>
            <div className="sort-radio">
              <div className="radio-pairs">
                <input
                  onChange={({ target: { value } }) => {
                    setOrder(value);
                    getReviews(selectedCategory, sortBy, value).then(
                      (reviewsFromApi) => {
                        setReviews(reviewsFromApi);
                      }
                    );
                  }}
                  type="radio"
                  name="order"
                  value="asc"
                />
                <label className="radio-label" htmlFor="asc">
                  ASC
                </label>
              </div>
              <div className="radio-pairs">
                <input
                  onChange={({ target: { value } }) => {
                    setOrder(value);
                    getReviews(selectedCategory, sortBy, value).then(
                      (reviewsFromApi) => {
                        setReviews(reviewsFromApi);
                      }
                    );
                  }}
                  type="radio"
                  name="order"
                  value="desc"
                />
                <label className="radio-label" htmlFor="desc">
                  DESC
                </label>
              </div>
            </div>
          </div>
        </div>
      </SideNav>
      <h2>Reviews...</h2>
      <FancyCard>
        {reviewFormIsOpen ? (
          <ReviewForm
            reviews={reviews}
            setReviews={setReviews}
            categories={categories}
            setReviewFormIsOpen={setReviewFormIsOpen}
          />
        ) : (
          <AddReviewButton setReviewFormIsOpen={setReviewFormIsOpen} />
        )}
      </FancyCard>

      {reviews.map((review) => {
        const reviewUrl = `/reviews/${review.review_id}`;

        return (
          <div key={review.title} className="rev-card">
            <FancyCard>
              <div className="review-sub-one">
                <img
                  src={review.review_img_url}
                  alt={review.title}
                  className="review-image"
                />
                <UpVote
                  author={review.owner}
                  addClass="review-votes"
                  id={review.review_id}
                  recievedVotes={review.votes}
                  type="reviews"
                />
              </div>
              <Link className="link" to={reviewUrl}>
                <h3 className="review-title">{review.title}</h3>
              </Link>
              <h5 className="review-category">Category: {review.category}</h5>
            </FancyCard>
          </div>
        );
      })}
    </main>
  );
}
