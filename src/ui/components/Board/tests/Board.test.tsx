import React from 'react'
import { mount } from '@shopify/react-testing'

import { World } from '../../../../core/entities'
import { Board, Grid, Stats } from '../..'

describe('<Board />', () => {
  it('renders grid size based on world', () => {
    const settings = {
      rows: 2,
      cols: 2
    }
    const world = new World(settings.rows, settings.cols)
    const board = mount(<Board world={world} />)

    expect(board.find(Grid)).toContainReactComponentTimes(Grid.Cell, 4)
  })

  it('display Cells filled stat', () => {
    const settings = {
      rows: 2,
      cols: 2
    }
    const world = new World(settings.rows, settings.cols)
    const board = mount(<Board world={world} />)
    expect(
      board.find(Stats.Item, { title: 'Cells filled' })?.prop('value')
    ).toBe(0)
  })

  it('display Cells Islands stats', () => {
    const settings = {
      rows: 2,
      cols: 2
    }
    const world = new World(settings.rows, settings.cols)
    const board = mount(<Board world={world} />)
    expect(board.find(Stats.Item, { title: 'Islands' })?.prop('value')).toBe(0)
  })
})
