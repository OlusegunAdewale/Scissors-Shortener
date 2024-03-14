import { ApiImpl } from "../impl";
import { ShortenResponse } from "../models/shortener.model";

type ShortenURLParams = {
  domain: string;
  long_url: string;
  group_guid: string;
};

export class ShortenApi extends ApiImpl {
  retrieveLink(bitlink: string) {
    return this.axios.get(this.buildPath("bitlinks", "bit.ly", bitlink));
  }

  shortenLink(params: ShortenURLParams) {
    return this.axios.post<ShortenResponse>("/shorten", params);
  }

  deleteLink(bitlink: string) {
    return this.axios.delete(this.buildPath("bitlinks", "bit.ly", bitlink));
  }
}
