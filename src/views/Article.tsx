import React from "react";

import { useLocation } from "react-router";

import { NewsResults } from "../interfaces/INews";
import CardArticle from "../components/cards/CardArticle";

import RepositoryFactory from "../api/respositoryFactory";
const NewsApi = RepositoryFactory.get("newsApi");

interface RouteParams {
  id: string;
}

interface Location {
  detail: NewsResults;
}

const Article = () => {
  // const [isError, setIsError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  let locat = useLocation();

  console.log(locat.pathname);

  const location = useLocation<Location>();

  // const [pageContent, setPageContentl] = useState<NewsResults[]>([]);

  // console.log("location.state.detail", location.state.detail.id);
  const queryOne = {
    endpoint: location.pathname,
  };

  return (<CardArticle data={NewsApi.getNewsSingle(queryOne)} />);
};

export default Article;
