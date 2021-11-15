import { worldFaker } from './fakers'

describe('World entity', () => {
  it('Should create custom 2d array', () => {
    const testRows = 5
    const testCols = 6

    const entity = worldFaker({ rows: testRows, cols: testCols })

    const cols = entity.grid[0].length
    const rows = entity.grid.length

    expect(cols).toBe(testCols)
    expect(rows).toBe(testRows)
  })
})
