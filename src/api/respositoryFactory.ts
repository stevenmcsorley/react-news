import NewsApi from "./news";
import TwitterApi from "./twitter"
import RssToJsonApi from "./rssToJson"

import { IApi } from "../interfaces/INews";


const repositories: IApi = {
  newsApi: NewsApi,
  twitterApi: TwitterApi,
  rssToJson: RssToJsonApi
};
export default {
  get: (name: string) => {
    return repositories[name];
  }
};