import { useParams } from "react-router-dom";
import { ReviewService } from "../../domain/ReviewService";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Error404 from "../Error404";

const ReviewPage = (props: { reviewService: ReviewService }) => {
  const marked = require("marked");
  const params = useParams();
  const name = params.name ? params.name : "";
  const review = props.reviewService.get(name);

  if (!review) return <Error404 />;

  return (
    <>
      <div className="flex">
        <div className="w-1/6 flex-none"></div>
        <div className="text-center flex-grow">
          <img src={review.image} alt={review.title} />
          <h1 className="text-2xl font-bold mb-5 mt-1">{review.title}</h1>
          <div className="break-normal text-justify prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              rehypePlugins={[rehypeRaw]}
              children={review.content}
            />
          </div>
        </div>
        <div className="w-1/6 flex-none"></div>
      </div>
    </>
  );
};

export default ReviewPage;
