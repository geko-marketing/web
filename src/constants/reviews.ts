import reviewsData from "../../content/site/reviews.json";

type REVIEW = {
    name: string;
    username: string;
    review: string;
    img: string;
};

export const REVIEWS: REVIEW[] = reviewsData.items;
