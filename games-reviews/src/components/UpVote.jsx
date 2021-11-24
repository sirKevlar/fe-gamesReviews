import { useState, useEffect } from "react";
import { upVote } from "../utils/apiCall";
import { downVote } from "../utils/apiCall";

export default function UpVote({ reviewVotes, review_id }) {
  const [votes, setVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setVotes(reviewVotes);
    setIsLoading(false);
  }, [reviewVotes]);

  if (isLoading) return <h5>Be Patient...</h5>;

  return (
    <div className="review-sub-two">
      <h3>VOTES: {votes}</h3>
      <div>
        <button
          onClick={() => {
            setVotes((currVotes) => {
              return currVotes + 1;
            });
            upVote(review_id);
          }}
          className="vote-button"
        >
          🔼
        </button>
        <button
          disabled={votes < 1}
          onClick={() => {
            setVotes((currVotes) => {
              return currVotes - 1;
            });
            downVote(review_id);
          }}
          className="vote-button"
        >
          🔽
        </button>
      </div>
    </div>
  );
}
