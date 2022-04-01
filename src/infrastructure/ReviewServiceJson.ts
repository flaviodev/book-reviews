import { Review } from "../domain/Review";
import { ReviewService } from "../domain/ReviewService";
import data from "./data.json"

const reviews: Review[] = (<any>data);

function initGroupedReviews (reviews: Review[]): Review[] {
    let result: Review[] = [];
    reviews.sort((a, b) => (b.date > a.date ? 1 : -1)).forEach(r => {
        if(!result.find(g => g.workTitle === r.workTitle)) {
            result = result.concat(r);
        }
    }); 

    return result;    
};

const groupedReviews: Review[] = initGroupedReviews(reviews);

export const ReviewServiceJson: ReviewService = {
    all: function (): Review[] {
        return reviews;
    },

    get: function (name: String): Review | undefined {
        return reviews.find((review) => review.name === name);
    },

    groupedReviews: function (): Review[] {
        return groupedReviews;
    },

    otherReviewsFromGroup: function (review: Review): Review[] {
        return reviews.filter(r => r.workTitle === review.workTitle && r.name !== review.name);
    },
};
