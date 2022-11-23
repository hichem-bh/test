import axios, { AxiosResponse } from "axios";
import auth from "../actions/auth";

export class API {
  private base_url = axios.create({ baseURL: "http://localhost:3000/" });
  private config = {
    headers: {
      "Access-Control-Allow-Origin": true,
      Authorization: `Bearer ${localStorage.getItem("profile")}`,
    },
  };
  constructor() {}

  get = <RestType>(
    endpoint: string,
    data: any
  ): Promise<AxiosResponse<RestType>> =>
    this.base_url.get(endpoint, {
      ...this.config,
      params: data,
    });

  add = (endpoint: string, data: any): Promise<AxiosResponse<any>> =>
    this.base_url.post(endpoint, data, this.config);

  update = <RestType>(
    endpoint: string,
    data: RestType
  ): Promise<AxiosResponse<RestType>> =>
    this.base_url.patch(endpoint, data, this.config);

  put = <RestType>(
    endpoint: string,
    data: RestType
  ): Promise<AxiosResponse<RestType>> =>
    this.base_url.put(endpoint, data, this.config);

  delete = <RestType>(endpoint: string): Promise<AxiosResponse<RestType>> =>
    this.base_url.delete(endpoint, this.config);
}

export default new API();
