import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewService } from "../../domain/ReviewService";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Error404 from "../Error404";

interface Props extends React.HTMLProps<HTMLDivElement> {
  reviewService: ReviewService;
}

const ReviewPage = (props: Props) => {
  const params = useParams();
  const name = params.name ? params.name : "";
  const review = props.reviewService.get(name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!review) return <Error404 />;

  return (
    <>
      <div className="flex">
        <div className="w-1/6 flex-none"></div>
        <div className="text-center flex-grow">
          <h1 className="text-2xl font-bold mb-5 mt-1">{review.title}</h1>
          <div className="bg-center bg-cover bg-fixed h-96" style={{ backgroundImage:`url(${review.image})` }}/>
          <div className="mt-10 break-normal text-justify prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              rehypePlugins={[rehypeRaw]}
              children={review.content}
            />
          </div>
          <div className=" mt-10 bg-top bg-cover bg-fixed h-36" style={{ backgroundImage:`url(${review.image})` }}/>
        </div>
        <div className="w-1/6 flex-none"></div>
      </div>
    </>
  );
};

export default ReviewPage;
