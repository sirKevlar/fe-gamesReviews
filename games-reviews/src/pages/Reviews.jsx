import { useEffect, useState } from "react";
import FancyCard from "../components/FancyCard";
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
        return (
          <FancyCard>
            <h3>{review.title}</h3>
          </FancyCard>
        );
      })}
    </main>
  );
}
