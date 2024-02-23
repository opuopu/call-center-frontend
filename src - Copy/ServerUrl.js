import axios from "axios";
export const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "https://thankful-top-coat-toad.cyclic.app"
    : "http://54.206.117.218";

export const SERVERURL = axios.create({
  baseURL: `${BASE_URL}/`,

  // timeout : 3000,
});
