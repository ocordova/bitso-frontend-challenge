var faker = require('faker')

import { World } from '../entities'

export const worldFaker = (overrides: object = {}): World => {
  const data = {
    rows: faker.random.number({ min: 0, max: 10 }),
    cols: faker.random.number({ min: 0, max: 10 }),
    ...overrides
  }

  const world = new World(data.rows, data.cols)
  return world
}
