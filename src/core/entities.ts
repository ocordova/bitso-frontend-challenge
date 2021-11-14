import { depthSearch } from './utils'

export class World {
  rows: number
  cols: number
  grid: number[][]

  constructor(rows: number, cols: number) {
    this.rows = rows
    this.cols = cols

    let emptyGrid = Array.from(Array(rows), () => Array(cols).fill(0))
    this.grid = emptyGrid
  }

  createLand = (row: number, col: number): void => {
    const currentValue = this.grid[row][col]
    const value = currentValue === 1 ? 0 : 1
    this.grid[row][col] = value
  }

  getCellValue = (row: number, col: number): number => {
    return this.grid[row][col]
  }

  getCellCount = (): number => {
    const flatten = this.grid.reduce((acc, val) => acc.concat(val), [])
    const onlyOnes = flatten.filter((x) => x === 1)
    return onlyOnes.length || 0
  }
}
