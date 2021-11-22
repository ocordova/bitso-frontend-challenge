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

  it('Should return cell value by row and col', () => {
    const testRows = 4
    const testCols = 4

    const entity = worldFaker({ rows: testRows, cols: testCols })
    expect(entity.getCellValue(0, 0)).toBe(0)
  })

  it('Should create an island', () => {
    const testRows = 4
    const testCols = 4

    const entity = worldFaker({ rows: testRows, cols: testCols })
    entity.createLand(0, 0)
    expect(entity.getCellValue(0, 0)).toBe(1)
  })

  it('Should return cell count', () => {
    const testRows = 4
    const testCols = 4

    const entity = worldFaker({ rows: testRows, cols: testCols })
    entity.createLand(0, 0)
    expect(entity.getCellCount()).toBe(1)
  })

  it('Should return island count', () => {
    const testRows = 12
    const testCols = 12

    const entity = worldFaker({ rows: testRows, cols: testCols })
    entity.createLand(0, 0)
    entity.createLand(0, 1)
    entity.createLand(1, 1)
    entity.createLand(1, 1)
    expect(entity.getCellCount()).toBe(2)
  })
})
