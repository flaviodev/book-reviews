import React from "react";
import { Link } from "react-router-dom";
import { Review } from "../../domain/Review";
import { format } from "date-fns";

const DATE_FORMAT = "dd/MM/yyyy";

interface Props extends React.HTMLProps<HTMLDivElement> {
  review: Review;
}

const ReviewListItem = (props: Props) => {
  const { review } = props;

  return (
    <>
      <div className="mx-10 mb-3">
        <div className="flex">
          <div className="w-1/6 flex-none"></div>
          <Link to={`/review/${review.name}`}>
            <div className="flex flex-nowrap">
              <img
                className="bg-cover bg-center w-28 h-16"
                src={review.image}
              />
              <div>
                <h2 className="ml-3 font-semibold text-base">{review.title}</h2>
                <h2 className="ml-3 text-xs">{review.author}</h2>
                <h2 className="ml-3 text-gray-400 text-xs">{format(new Date(review.date), DATE_FORMAT)}</h2>
              </div>
            </div>
          </Link>
          <div className="w-1/6 flex-none"></div>
        </div>
      </div>
    </>
  );
};

export default ReviewListItem;
