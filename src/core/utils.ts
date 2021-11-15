export const depthFirstSearch = (
  row: number,
  col: number,
  grid: number[][]
) => {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === 0
  ) {
    return
  }

  grid[row][col] = 0

  // Explore right
  depthFirstSearch(row, col + 1, grid)
  // Explore left
  depthFirstSearch(row, col - 1, grid)
  // Explore down
  depthFirstSearch(row + 1, col, grid)
  // Explore up
  depthFirstSearch(row - 1, col, grid)
}
