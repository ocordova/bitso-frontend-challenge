import { BitcoinAdapter } from '../domain/adapters'
import { enviroment } from '../misc/environment'
import { HttpClient, IHttpClientRequestParams } from '../misc/http-client'

export interface IBitcoinChildren {
  id: string
}

export interface IBitcoinData {
  children: IBitcoinChildren[]
}

export class BitcoinRepo {
  private baseUrl = `${enviroment.baseUrl}`
  private bitcoinAdapter = new BitcoinAdapter()

  constructor(private client = new HttpClient()) {}

  /// TODO Interface  for whole reddit response
  public async getBitcoins(): Promise<any> {
    const params: IHttpClientRequestParams = {
      url: `${this.baseUrl}/bitcoin.json`
    }

    const data = await this.client.get<IBitcoinData>(params)
    const bitcoins = this.bitcoinAdapter.toEntity(data.children)

    return bitcoins
  }
}
