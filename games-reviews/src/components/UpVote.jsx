import { useState, useEffect } from "react";
import { upVote } from "../utils/apiCall";
import { downVote } from "../utils/apiCall";

export default function UpVote({ reviewVotes, review_id, addClass }) {
  const [votes, setVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const classToAdd = `vote-button ${addClass}`;

  useEffect(() => {
    setVotes(reviewVotes);
    setIsLoading(false);
  }, [reviewVotes]);

  if (isLoading) return <h5>Be Patient...</h5>;

  return (
    <div className="review-sub-two">
      <h3 className={addClass}>VOTES {votes}</h3>
      <div>
        <button
          onClick={() => {
            setVotes((currVotes) => {
              return currVotes + 1;
            });
            upVote(review_id);
          }}
          className={classToAdd}
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
          className={classToAdd}
        >
          🔽
        </button>
      </div>
    </div>
  );
}
