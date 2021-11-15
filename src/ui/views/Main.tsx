import React, { useState } from 'react'

import { World } from '../../core/entities'
import { Grid, Card, Stats, TextField } from '../components'

export const MainView = () => {
  const newWorld = new World(20, 20)
  const [state, setState] = useState({ world: newWorld })

  const GridMarkup = () => {
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
    <Card
      title="Lorem ipsum"
      actions={[
        <TextField
          label="Rows"
          name="rows"
          type="number"
          inputMode="numeric"
          min={5}
        />,
        <TextField
          label="Cols"
          name="cols"
          type="number"
          inputMode="numeric"
          min={5}
        />
      ]}
    >
      <Grid cols={state.world.cols}>{GridMarkup()}</Grid>
      <Stats>
        <Stats.Item title="Cells filled" value={state.world.getCellCount()} />
        <Stats.Item title="Islands" value={0} />
      </Stats>
    </Card>
  )
}
