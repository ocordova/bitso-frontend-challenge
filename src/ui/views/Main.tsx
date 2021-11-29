import React, { useState, useEffect } from 'react'

import { Card, NavBar, Board } from '../components'
import { World } from '../../core/domain/entities'

export const MainView = () => {
  const [state, setState] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleResize = (rows: number, cols: number) => {
    const newWorld = new World(rows, cols)
    setState({ ...state, world: newWorld })
  }

  const handleBoardChange = (world: World) => {
    setState({ ...state, world: world })
  }

  const getBitcoins = async () => {
    const fetchedData: any = []
    const bitcoins = [[0, 1, 0, 1, 0]]
    const data = await fetch('https://www.reddit.com/r/bitcoin.json')
      .then((response) => response.json())
      .then((data) => {
        const children = data.data.children
        console.log(children)
        for (let i = 0; i < children.length; i++) {
          const element = children[i]
          console.log(element)
          const row = element.data.id
          console.log(row)
          fetchedData.append(row)
        }
      })
      .catch((err) => {})

    console.log(fetchedData)

    const newWorld = new World(rows, cols, grid)
    setState({ world: newWorld })
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    getBitcoins()
  }, [setIsLoading])

  const isLoadingMarkdown = () => {
    return <div>IsLoading</div>
  }

  const PageMarkdown = () => {
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

  return (
    <>
      {isLoading && isLoadingMarkdown}
      {!isLoading && PageMarkdown}
    </>
  )
}
