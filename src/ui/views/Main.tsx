import React, { useState, useEffect } from 'react'

import { Card, NavBar, Board } from '../components'
import { World } from '../../core/domain/entities'
import { BitcoinController } from '../../core/presentation/controllers'

export const MainView = () => {
  const bitcoinController = new BitcoinController()
  const [state, setState] = useState({ world: new World(12, 12) })
  const [isLoading, setIsLoading] = useState(true)

  const handleResize = (rows: number, cols: number) => {
    const newWorld = new World(rows, cols)
    setState({ ...state, world: newWorld })
  }

  const handleBoardChange = (world: World) => {
    setState({ ...state, world: world })
  }

  const getBitcoins = async () => {
    const grid = await bitcoinController.getBitocoinsGrid()
    const rowsSize = grid.length
    const colsSize = grid[0].length

    const newWorld = new World(rowsSize, colsSize, grid)
    setState({ world: newWorld })
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    getBitcoins()
  }, [])

  const IsLoadingMarkdown = () => {
    return (
      <div className="max-w-sm mx-auto flex justify-center">Loading...</div>
    )
  }

  const PageMarkdown = () => {
    return (
      <>
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
      </>
    )
  }

  return (
    <div className="min-h-full">
      {isLoading && <IsLoadingMarkdown />}
      {!isLoading && <PageMarkdown />}
    </div>
  )
}
