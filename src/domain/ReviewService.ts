import { Review } from "./Review";

export interface ReviewService {
    all(): Review[];
    get(name: string): Review | undefined;
}
