import { BitcoinRepository } from '../data/repositories'
import { World } from './entities'

export class BitcoinUsecases {
  constructor(
    private repository: BitcoinRepository = new BitcoinRepository()
  ) {}

  public async getBitocoinsGrid(): Promise<World['grid']> {
    const bitcoins = await this.repository.getBitcoins()
    const grid: World['grid'] = bitcoins.map((elem) => {
      return elem.getRowsStatus()
    })

    return grid
  }
}
