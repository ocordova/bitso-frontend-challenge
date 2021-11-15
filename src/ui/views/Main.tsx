import React, { useState } from 'react'

import { Card, NavBar, Board } from '../components'
import { World } from '../../core/entities'

export const MainView = () => {
  const [state, setState] = useState({ world: new World(12, 12) })

  const handleResize = (rows: number, cols: number) => {
    const newWorld = new World(rows, cols)
    setState({ ...state, world: newWorld })
  }

  const handleBoardChange = (world: World) => {
    setState({ ...state, world: world })
  }

  return (
    <div className="min-h-full">
      <NavBar
        settings={{ rows: state.world.rows, cols: state.world.cols }}
        onChange={handleResize}
      />
      <main className="flex">
        <div className="max-w-screen-xl mx-auto p-8">
          <Card>
            <Board world={state.world} onChange={handleBoardChange} />
          </Card>
        </div>
      </main>
    </div>
  )
}
