import React, { useState } from 'react'

import { World } from '../../core/entities'
import { Grid } from '../components'

export const MainView = () => {
  const newWorld = new World(20, 20)
  const [state, setState] = useState({ world: newWorld })

  const GridContent = () => {
    return (
      <>
        {state.world.grid.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <Grid.Cell
              key={`${rowIndex}_${colIndex}`}
              state={state.world.getCellValue(rowIndex, colIndex)}
              onClick={() => {
                state.world.createLand(rowIndex, colIndex)
                setState((data) => ({ ...data, world: state.world }))
              }}
            />
          ))
        )}
      </>
    )
  }

  return (
    <div className="flex h-screen content-center">
      <Grid cols={state.world.cols}>{GridContent()}</Grid>
    </div>
  )
}
