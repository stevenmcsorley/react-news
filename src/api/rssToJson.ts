import { AxiosResponse } from "axios";
import BaseApiRssToJson from "./baseApiRssToJson";


export default {
  getBreakingNews(): Promise<AxiosResponse<any>> {
    return BaseApiRssToJson.get(`api.json?rss_url=http://feeds.bbci.co.uk/news/rss.xml`);
  },
  getRecentQuakes(): Promise<AxiosResponse<any>> {
    return BaseApiRssToJson.get(`api.json?rss_url=https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.atom`);
  },
  getRecentVolcanos(): Promise<AxiosResponse<any>> {
    return BaseApiRssToJson.get(`api.json?rss_url=https://www.volcanodiscovery.com/volcanonews.rss`);
  },
  getWeatherWarnings(): Promise<AxiosResponse<any>> {
    return BaseApiRssToJson.get(`api.json?rss_url=http://www.metoffice.gov.uk/public/data/PWSCache/WarningsRSS/Region/UK`);
  },
  getWhoDiseaseOutbrakes(): Promise<AxiosResponse<any>> {
    return BaseApiRssToJson.get(`api.json?rss_url=https://www.who.int/feeds/entity/csr/don/en/rss.xml`);
  },

};
