import { match } from "assert";
import React from "react";
import {useParams} from 'react-router-dom';
import { ArticleContent } from "../../services/ArticleContent";
import Error404 from "../Error404";


const ArticlePage: React.FC = () => {
  const params = useParams();
  const article = ArticleContent.find((a) => a.name === params.name);

  if(!article) return <Error404 />;

  return (
    <>
      <h1 className="m-5 text-xl font-bold">{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key} className="mx-10 my-1">{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
