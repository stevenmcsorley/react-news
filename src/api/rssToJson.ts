import { AxiosResponse } from "axios";
import BaseApiRssToJson from "./baseApiRssToJson";


export default {
  getBreakingNews(): Promise<AxiosResponse<any>> {
    return BaseApiRssToJson.get(`api.json?rss_url=http://rss.cnn.com/rss/edition.rss&count=7&api_key=5ivfzdrkuqwmoe0dgxeqvhfz0knlo7yq4fw20bt0`);
  },

};
