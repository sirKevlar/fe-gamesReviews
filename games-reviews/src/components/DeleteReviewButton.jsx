export default function DeleteReviewButton() {
  return (
    <div
      className="delete-review"
      onClick={() => {
        setReviewFormIsOpen(true);
      }}
    >
      <button className="delete-review-button">DELETE REVIEW</button>
    </div>
  );
}
