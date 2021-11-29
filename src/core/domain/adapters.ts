import { IBitcoinChildren } from '../data/repositories'
import { Bitcoin } from './entities'

export class BitcoinAdapter {
  singlenEtityBitcoin = (bitcoin: Partial<IBitcoinChildren>) => {
    return new Bitcoin({
      id: bitcoin.id
    })
  }

  toEntity(data: IBitcoinChildren[]) {
    if (!data) return null

    if (Array.isArray(data)) {
      return data.map(this.singlenEtityBitcoin)
    } else {
      return this.singlenEtityBitcoin(data)
    }
  }
}
