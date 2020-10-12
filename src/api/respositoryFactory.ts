import NewsApi from "./news";
import TwitterApi from "./twitter"


const repositories: any = {
  newsApi: NewsApi,
  twitterApi: TwitterApi
};
export default {
  get: (name: string | number) => {
    return repositories[name];
  }
};