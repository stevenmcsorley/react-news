import BaseApi from "./baseApi";

interface Query {
  endpoint: string;
  q: string;
  section?: string;
  pageSize?: number;
  orderBy?: string;
  showFields?: string;
}


export default {
  getNews(queryParams: Query) {
    return BaseApi.get(
      `/${queryParams.endpoint}?order-by=${queryParams.orderBy}&show-fields=${queryParams.showFields}&section=${queryParams.section}&q=${queryParams.q}&page-size=${queryParams.pageSize}&api-key=${process.env.REACT_APP_API_KEY}`
    );
  },
  getNewsCategory(queryParams: Query) {
    return BaseApi.get(
      `/${queryParams.endpoint}?order-by=${queryParams.orderBy}&show-fields=all&section=${queryParams.q}&page-size=${queryParams.pageSize}&api-key=${process.env.REACT_APP_API_KEY}`
    );
  },
  getNewsSingle(queryParams: Query) {
    return BaseApi.get(
      `${queryParams.endpoint}?show-related=true&show-most-viewed=true&show-fields=all&api-key=${process.env.REACT_APP_API_KEY}`
    );
  },
};
