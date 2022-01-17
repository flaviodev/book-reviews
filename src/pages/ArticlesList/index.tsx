import React from "react";
import ArticleListItem from "../../components/ArticleListItem";
import { ArticleContent } from "../../services/ArticleContent";

const ArticlesList: React.FC = (props) => {
  return (
    <>
      <h1 className="m-5 text-xl font-bold">Articles</h1>
      {ArticleContent.map((article, key) => (
        <ArticleListItem key={key} article={article}/>
      ))}
    </>
  );
};

export default ArticlesList;
