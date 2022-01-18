import React from "react";
import ReviewListItem from "../../components/ReviewListItem";
import { Review } from "../../domain/Review";
import { ReviewService } from "../../domain/ReviewService";

const ReviewsList = (props: { reviewService: ReviewService }) => {
  return (
    <>
      <h1 className="m-5 text-xl font-bold">Articles</h1>
      {props.reviewService.all().map((review, key) => (
        <ReviewListItem key={key} review={review} />
      ))}
    </>
  );
};

export default ReviewsList;
