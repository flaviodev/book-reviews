import React from "react";
import { Link } from "react-router-dom";
import { Article, ArticleContent } from "../../services/ArticleContent";

type ArticleListItemProps = {
  key: number,
  article: Article
}

const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const {key, article} = props;
  
  return (
    <>
        <div  key={key} className=" mx-10 mb-3  border-slate-200 border-b-2">
          <Link to={`/article/${article.name}`}>
            <h3 className="font-semibold">{article.title}</h3>
            <p className="text-slate-600 mb-2">
              {article.content[0].substring(0, 150)}...
            </p>
          </Link>
        </div>
    </>
  );
};

export default ArticleListItem;
