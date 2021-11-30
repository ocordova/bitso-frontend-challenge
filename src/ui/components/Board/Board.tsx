import React, { useCallback } from 'react'
import { World } from '../../../core/domain/entities'

import { Grid, Stats } from '../'
import '../global.css'

export interface BoardProps {
  /** world instance */
  world: World
  /** Callback when a cell is clicked and board changed */
  onChange?(world: World): void
}

export const Board = ({ world, onChange }: BoardProps) => {
  const handleCellClick = useCallback(
    (rowIndex: number, colIndex: number) => {
      world.createLand(rowIndex, colIndex)
      onChange && onChange(world)
    },
    [onChange, world]
  )

  return (
    <>
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
      <Stats>
        <Stats.Item
          data-cy="board-stats-cells-filled"
          title="Cells filled"
          value={world.getCellCount()}
        />
        <Stats.Item
          data-cy="board-stats-islands"
          title="Islands"
          value={world.getCountOfIslads()}
        />
      </Stats>
    </>
  )
}
