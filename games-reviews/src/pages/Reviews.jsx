import { useEffect, useState } from "react";
import FancyCard from "../components/FancyCard";
import UpVote from "../components/UpVote";
import { getReviews } from "../utils/apiCall";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <h2>Be Patient...</h2>;

  return (
    <main>
      <h2>Check these reviews...</h2>

      {reviews.map((review) => {
        console.log(review);
        return (
          <FancyCard key={review.title}>
            <div className="review-sub-one">
              <img
                src={review.review_img_url}
                alt={review.title}
                className="review-image"
              />
              <div className="review-sub-two">
                <h3>VOTES: {review.votes}</h3>
                <UpVote />
              </div>
            </div>
            <h4>{review.title}</h4>
          </FancyCard>
        );
      })}
    </main>
  );
}
