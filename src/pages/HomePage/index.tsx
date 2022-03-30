import React from "react";
import HomeListItem from "../../components/HomeListItem";
import { ReviewService } from "../../domain/ReviewService";

interface Props extends React.HTMLProps<HTMLDivElement> {
  reviewService: ReviewService;
}

const HomePage = (props: Props) => {
  const reviews = props.reviewService
    .all()
    .sort((a, b) => (b.date > a.date ? 1 : -1))
    .slice(0,9);

  return (
    <>
      <h1 className="m-5 text-xl font-bold text-center">Home</h1>
      {reviews.map((review, key) => (
        <HomeListItem key={key} review={review} />
      ))}
    </>
  );
};

export default HomePage;
