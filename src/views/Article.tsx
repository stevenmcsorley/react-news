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

  const location = useLocation<Location>();

  const queryOne = {
    endpoint: location.pathname.substring(8),
  };

  return (<CardArticle data={NewsApi.getNewsSingle(queryOne)} />);
};

export default Article;
