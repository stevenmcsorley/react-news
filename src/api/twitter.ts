import BaseApiTwitter from "./baseApiTwitter";



export default {
  getTrends() {
    return BaseApiTwitter.get(
      `/twitter.php?id=21125`
    );
  },

};
