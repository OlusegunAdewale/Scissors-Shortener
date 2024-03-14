import axios from "axios";
import { ShortenApi } from "./bitly";

export default class Api {
  static #api: Api;
  static get instance() {
    if (!Api.#api) Api.#api = new Api();

    return Api.#api;
  }

  readonly shorten: ShortenApi;

  constructor() {
    const axiosInstance = axios.create({
      baseURL: "https://api-ssl.bitly.com/v4/",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_BITLY_API_KEY,
      },
    });

    this.shorten = new ShortenApi(axiosInstance);
  }
}
