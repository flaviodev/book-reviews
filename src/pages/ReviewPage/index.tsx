import { match } from "assert";
import React from "react";
import {useParams} from 'react-router-dom';
import { ReviewService } from "../../domain/ReviewService";
import { ReviewServiceJson } from "../../infrastructure/ReviewServiceJson";
import Error404 from "../Error404";


const ReviewPage = (props: {reviewService: ReviewService}) => {
  const params = useParams();
  const name = params.name ? params.name : "";
  const review = props.reviewService.get(name);

  if(!review) return <Error404 />;

  return (
    <>
      <h1 className="m-5 text-xl font-bold">{review.title}</h1>
      <p className="mx-10 my-1">{review.content}</p>
    </>
  );
};

export default ReviewPage;
