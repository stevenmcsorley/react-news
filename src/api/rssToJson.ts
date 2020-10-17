import { AxiosResponse } from "axios";
import BaseApiRssToJson from "./baseApiRssToJson";


export default {
  getBreakingNews(): Promise<AxiosResponse<any>> {
    return BaseApiRssToJson.get(`api.json?rss_url=http://feeds.bbci.co.uk/news/rss.xml`);
  },

};
