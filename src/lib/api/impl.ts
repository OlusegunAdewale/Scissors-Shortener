import { type AxiosInstance } from "axios";

export class ApiImpl {
  constructor(protected axios: AxiosInstance) {}

  buildPath(...uri: string[]) {
    return uri.join("/");
  }
}
