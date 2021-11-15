import React, { useState, useCallback } from 'react'

import { Grid, Card, Stats, NavBar } from '../components'
import { World } from '../../core/entities'

export const MainView = () => {
  const [state, setState] = useState({ world: new World(12, 12) })

  const handleResize = (rows: number, cols: number) => {
    const newWorld = new World(rows, cols)
    setState({ ...state, world: newWorld })
  }

  const handleCellClick = useCallback((rowIndex: number, colIndex: number) => {
    state.world.createLand(rowIndex, colIndex)
    setState((data) => ({ ...data, world: state.world }))
  }, [])

  return (
    <div className="min-h-full">
      <NavBar
        settings={{ rows: state.world.rows, cols: state.world.cols }}
        onChange={handleResize}
      />
      <main className="flex">
        <div className="max-w-screen-xl mx-auto p-8">
          <Card>
            <Grid cols={state.world.cols}>
              {state.world.grid.map((row, rowIndex) =>
                row.map((col, colIndex) => (
                  <Grid.Cell
                    key={`${rowIndex}_${colIndex}`}
                    state={state.world.getCellValue(rowIndex, colIndex)}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    onClick={handleCellClick}
                  />
                ))
              )}
            </Grid>
            <Stats>
              <Stats.Item
                title="Cells filled"
                value={state.world.getCellCount()}
              />
              <Stats.Item title="Islands" value={0} />
            </Stats>
          </Card>
        </div>
      </main>
    </div>
  )
}
