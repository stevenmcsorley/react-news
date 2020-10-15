import NewsApi from "./news";
import TwitterApi from "./twitter"

import { IApi } from "../interfaces/INews";


const repositories: IApi = {
  newsApi: NewsApi,
  twitterApi: TwitterApi
};
export default {
  get: (name: string) => {
    return repositories[name];
  }
};