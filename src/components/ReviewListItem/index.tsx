import React from "react";
import { Link } from "react-router-dom";
import { Review } from "../../domain/Review";

const ReviewListItem = (props: {key: number, review: Review}) => {
  const {key, review} = props;
  
  return (
    <>
        <div key={key} className=" mx-10 mb-3  border-slate-200 border-b-2">
          <Link to={`/review/${review.name}`}>
            <h3 className="font-semibold">{review.title}</h3>
          </Link>
        </div>
    </>
  );
};

export default ReviewListItem;
