import { Review } from "./Review";

export interface ReviewService {
    all(): Review[];
    get(name: string): Review | undefined;
    groupedReviews(): Review[];
    otherReviewsFromGroup(review: Review): Review[];
}
