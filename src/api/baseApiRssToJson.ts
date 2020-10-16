import axios from "axios";

const baseURL = `https://api.rss2json.com/v1/`;

export default axios.create({
  baseURL
});