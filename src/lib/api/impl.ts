/* eslint-disable @typescript-eslint/no-explicit-any */

import { type AxiosInstance } from "axios";

export class ApiImpl {
  constructor(protected axios: AxiosInstance) {}

  buildPath(...uri: any[]) {
    return uri.join("/");
  }
}
