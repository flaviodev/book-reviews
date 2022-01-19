import React from "react";
import ReviewListItem from "../../components/ReviewListItem";
import { ReviewService } from "../../domain/ReviewService";

const ReviewsList = (props: { reviewService: ReviewService }) => {
  const reviews = props.reviewService
    .all()
    .sort((a, b) => (a.title > b.title ? 1 : -1));

  return (
    <>
      <h1 className="m-5 text-xl font-bold">Reviews</h1>
      {props.reviewService.all().map((review, key) => (
        <ReviewListItem key={key} review={review} />
      ))}
    </>
  );
};

export default ReviewsList;
