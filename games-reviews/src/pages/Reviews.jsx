import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FancyCard from "../components/FancyCard";
import SideNav from "../components/SideNav";
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
      <SideNav>
        <h3>SN!</h3>
      </SideNav>

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
