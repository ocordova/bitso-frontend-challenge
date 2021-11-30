import { World } from '../domain/entities'
import { BitcoinUsecases } from '../domain/usecases'

export class BitcoinController {
  private userUsecases = new BitcoinUsecases()

  public async getBitocoinsGrid(): Promise<World['grid']> {
    return this.userUsecases.getBitocoinsGrid()
  }
}
