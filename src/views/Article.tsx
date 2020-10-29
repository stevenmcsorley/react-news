import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { SingleResponse } from "../interfaces/ISingleArticle";
import SkeletonCard from "../skeleton/Skeleton";

import { NewsResults } from "../interfaces/INews";
import CardArticle from "../components/cards/CardArticle";
import CardRelated from "../components/cards/CardRelated";

import RepositoryFactory from "../api/respositoryFactory";
const NewsApi: any = RepositoryFactory.get("newsApi");

interface RouteParams {
  id: string;
}

interface Location {
  detail: NewsResults;
}

const Article = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState<{ response: SingleResponse }>({
    response: {
      content: {
        fields: {
          body: "",
        },
      },
      relatedContent: [],
      status: "",
      total: 0,
      userTier: "",
    },
  });

  const location = useLocation<Location>();

  const queryOne = {
    endpoint: location.pathname.substring(8),
  };

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await NewsApi.getNewsSingle(queryOne);
        setQuery(result.data);
        console.log("queryOne", queryOne);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryOne.endpoint]);
  return (
    <div>
      {isLoading && <SkeletonCard count={10} grid={2} />}
      <div className={`dev-grid-wrapper__div--column--2 dev-u-padding-default`}>
        <div className="position-relative ">
          <CardArticle
            title={query.response.content.webTitle}
            body={query.response.content.fields.body}
            loading={isLoading}
          />
        </div>
        <div className="position-relative">
          {query.response.relatedContent.map((item, index) => (
            <div key={index}>
              <CardRelated
                title={item.webTitle}
                image={item.fields.thumbnail}
                onClick={() =>
                  history.push({
                    pathname: `/article/${item.id}`,
                    state: { detail: item },
                  })
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
