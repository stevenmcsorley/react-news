import React, { useEffect, useState } from "react";

import RepositoryFactory from "../../api/respositoryFactory";
const NewsApi: any = RepositoryFactory.get("rssToJson");

interface NewsFeed {
  items: Items[];
}
interface Items {
  author: string;
  categories: [];
  content: string;
  description: string;
  enclosure?: [];
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

const NewsFeed = () => {
  const [query, setQuery] = useState<{ items: Items[] }>({
    items: [],
  });

  // const [isError, setIsError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsError(false);
    setIsLoading(true);

    const fetchData = async () => {
      const result = await NewsApi.getBreakingNews();
      setQuery(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);


    return (
      <li>
        <ul>
        <li>BREAKING NEWS: </li>
        {query.items.map((item, index) => !isLoading && <li key={index}>{item.title} - </li>)}
        </ul>
      </li>
      
    );

};

export default NewsFeed;