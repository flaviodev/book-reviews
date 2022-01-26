import React from "react";
import ReviewListItem from "../../components/ReviewListItem";
import { ReviewService } from "../../domain/ReviewService";

interface Props extends React.HTMLProps<HTMLDivElement> {
  reviewService: ReviewService;
}

const ReviewsList = (props: Props) => {
  const reviews = props.reviewService
    .all()
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  return (
    <>
      <h1 className="m-5 text-xl font-bold">Reviews</h1>
      {reviews.map((review, key) => (
        <ReviewListItem key={key} review={review} />
      ))}
    </>
  );
};

export default ReviewsList;
