import { AxiosResponse } from "axios";
import BaseApi from "./baseApi";

import {Query} from "../interfaces/INews"


export default {
  getNews(queryParams: Query): Promise<AxiosResponse<any>> {
    return BaseApi.get(
      `${queryParams.endpoint}?order-by=${queryParams.orderBy}&show-fields=${queryParams.showFields}&section=${queryParams.section}&q=${queryParams.q}&page-size=${queryParams.pageSize}&api-key=${process.env.REACT_APP_API_KEY}`
    );
  },
  getNewsCategory(queryParams: Query): Promise<AxiosResponse<any>> {
    return BaseApi.get(
      `${queryParams.endpoint}?order-by=${queryParams.orderBy}&show-fields=all&section=${queryParams.q}&page-size=${queryParams.pageSize}&api-key=${process.env.REACT_APP_API_KEY}`
    );
  },
  getNewsSingle(queryParams: any): Promise<AxiosResponse<any>> {
    return BaseApi.get(
      `${queryParams.endpoint}?show-related=true&show-most-viewed=true&show-fields=all&api-key=${process.env.REACT_APP_API_KEY}`
    );
  },
};
