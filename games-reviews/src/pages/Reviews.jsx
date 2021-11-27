import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FancyCard from "../components/FancyCard";
import SideNav from "../components/SideNav";
import UpVote from "../components/UpVote";
import { getReviews, getCategories } from "../utils/apiCall";

export default function Reviews({ reviews, setReviews }) {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
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
                  id={review.review_id}
                  recievedVotes={review.votes}
                  type="review"
                />
              </div>
              <Link className="link" to={reviewUrl}>
                <h3>{review.title}</h3>
              </Link>
              <h6>Category: {review.category}</h6>
            </FancyCard>
          </div>
        );
      })}
    </main>
  );
}
