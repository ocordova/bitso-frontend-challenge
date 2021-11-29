import { depthFirstSearch } from '../utils'

export class World {
  rows: number
  cols: number
  grid: number[][]

  constructor(rows: number, cols: number, grid: grid) {
    this.rows = rows
    this.cols = cols
    this.grid = grid
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

  getCountOfIslads() {
    let count = 0
    var clone = this.grid.map((arr) => {
      return arr.slice()
    })

    for (let row = 0; row < clone.length; row++) {
      for (let col = 0; col < clone[row].length; col++) {
        if (clone[row][col] === 1) {
          count++
          depthFirstSearch(row, col, clone)
        }
      }
    }

    return count
  }
}

export class Bitcoin {
  id = ''

  constructor(data: Partial<Bitcoin>) {
    Object.assign(this, data)
  }
}
