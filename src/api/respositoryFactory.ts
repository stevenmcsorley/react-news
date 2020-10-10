import NewsApi from "./news";


const repositories: any = {
  newsApi: NewsApi,
};
export default {
  get: (name: string | number) => {
    return repositories[name];
  }
};