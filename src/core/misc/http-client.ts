import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IHttpClientRequestParams {
  url: string
}

export interface IHttpClient {
  get<T>(parameters: IHttpClientRequestParams): Promise<T>
}

export class HttpClient implements IHttpClient {
  http: AxiosInstance
  config: AxiosRequestConfig

  constructor() {
    this.http = axios.create()
    this.config = {}
  }

  public async get<T>(parameters: IHttpClientRequestParams): Promise<T> {
    const { url } = parameters
    const response: AxiosResponse = await this.http.get(url, { ...this.config })

    return response.data
  }
}
