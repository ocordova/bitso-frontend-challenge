import { HttpClient, IHttpClientRequestParams } from '../misc/http-client'
import { BitcoinAdapter } from '../domain/adapters'
import { Bitcoin } from '../domain/entities'
import { enviroment } from '../misc/environment'

export interface IBitcoinChildren {
  data: {
    id: string
  }
}

export interface IListingData {
  data: {
    children: IBitcoinChildren[]
  }
}

export class BitcoinRepository {
  private baseUrl = `${enviroment.baseUrl}`
  private bitcoinAdapter = new BitcoinAdapter()

  constructor(private client = new HttpClient()) {}

  public async getBitcoins(): Promise<Bitcoin[]> {
    const params: IHttpClientRequestParams = {
      url: `${this.baseUrl}/bitcoin.json`
    }

    const { data } = await this.client.get<IListingData>(params)
    const bitcoins = this.bitcoinAdapter.multipleToEntity(data.children)

    return bitcoins
  }
}
