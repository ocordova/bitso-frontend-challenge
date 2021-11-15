import React, { useCallback } from 'react'
import { World } from '../../../core/entities'

import { Grid } from '../'
import '../global.css'

export interface BoardProps {
  /** world instance */
  world: World
  /** Callback when a cell is clicked and board changed */
  onChange?(world: World): void
}

export const Board = ({ world, onChange }: BoardProps) => {
  const handleCellClick = useCallback((rowIndex: number, colIndex: number) => {
    world.createLand(rowIndex, colIndex)
    onChange && onChange(world)
  }, [])

  return (
    <Grid cols={world.cols}>
      {world.grid.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <Grid.Cell
            key={`${rowIndex}_${colIndex}`}
            state={world.getCellValue(rowIndex, colIndex)}
            rowIndex={rowIndex}
            colIndex={colIndex}
            onClick={handleCellClick}
          />
        ))
      )}
    </Grid>
  )
}
