import { Review } from "../domain/Review";
import { ReviewService } from "../domain/ReviewService";
import data from "./data.json"

const reviews: Review[] = (<any>data);

export const ReviewServiceJson: ReviewService = {
    all: function (): Review[] {
        return reviews;
    },

    get: function (name: String): Review | undefined {
        return reviews.find((review) => review.name === name);
    }
};
