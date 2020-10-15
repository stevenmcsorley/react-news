import { AxiosResponse } from "axios";
import BaseApiTwitter from "./baseApiTwitter";



export default {
  getTrends(): Promise<AxiosResponse<any>> {
    return BaseApiTwitter.get(
      `/twitter.php?id=21125`
    );
  },

};
