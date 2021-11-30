import { IBitcoinChildren } from '../data/repositories'
import { Bitcoin } from './entities'

export class BitcoinAdapter {
  singlenEtityBitcoin = (bitcoin: Partial<IBitcoinChildren>) => {
    return new Bitcoin({
      id: bitcoin.data?.id
    })
  }

  multipleToEntity(data: IBitcoinChildren[]) {
    return data.map(this.singlenEtityBitcoin)
  }
}
