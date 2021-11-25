import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FancyCard from "../components/FancyCard";
import UpVote from "../components/UpVote";
import { getReviewById, getCommentsByReviewId } from "../utils/apiCall";

export default function ReviewById() {
  const [review, setReview] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { reviewId } = useParams();

  useEffect(() => {
    getReviewById(reviewId).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setCommentCount(reviewFromApi.comment_count);
      setIsLoading(false);
    });
  }, [reviewId]);

  useEffect(() => {
    getCommentsByReviewId(reviewId).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [reviewId]);

  if (isLoading) return <h2>Be Patient...</h2>;

  return (
    <main>
      <h2>Check this review...</h2>
      <FancyCard>
        <h5>{review.title}</h5>
        <img
          className="large-image"
          src={review.review_img_url}
          alt={review.title}
        />
        <h5>Category: {review.category}</h5>
        <h5>Comment Count: {commentCount}</h5>
        <h5>Contributor: {review.owner}</h5>
        <h6 className="review-body">{review.review_body}</h6>
        <UpVote id={review.review_id} reviewVotes={review.votes} />
      </FancyCard>
      <div className="comment-input">
        <input
          id="comment-textbox"
          type="text"
          placeholder="Leave your comment here..."
        />
      </div>
      {comments.map((comment) => {
        return (
          <FancyCard>
            <div className="comments">
              <h5 className="comments-h5">{comment.author}</h5>
              <div className="comments-bottom">
                <div className="comment-body">
                  <h6>{comment.body}</h6>
                </div>
                <div className="small-votes">
                  <UpVote
                    addClass="comment-vote"
                    id={reviewId}
                    reviewVotes={comment.votes}
                  />
                </div>
              </div>
            </div>
          </FancyCard>
        );
      })}
    </main>
  );
}
