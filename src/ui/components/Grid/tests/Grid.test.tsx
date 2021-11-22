import React from 'react'
import { mount } from '@shopify/react-testing'
import { classNames } from '../../../utils/css'

import { Grid } from '../Grid'
import { styles } from '../components'

describe('<Grid />', () => {
  const renderChildren = () =>
    [0, 1].map((i) => (
      <Grid.Cell key={i} state={0} rowIndex={0} colIndex={0}></Grid.Cell>
    ))

  it('renders its children', () => {
    const stack = mount(<Grid>{renderChildren()}</Grid>)

    expect(stack).toContainReactComponentTimes(Grid.Cell, 2)
  })

  describe('<Grid.Cell />', () => {
    it('renders water style when state is 0', () => {
      const cell = mount(<Grid.Cell state={0} rowIndex={0} colIndex={0} />)

      expect(cell).toContainReactComponent('div', {
        className: classNames(...[styles.base, styles.water])
      })
    })

    it('renders land style when state is 1', () => {
      const cell = mount(<Grid.Cell state={1} rowIndex={0} colIndex={0} />)

      expect(cell).toContainReactComponent('div', {
        className: classNames(...[styles.base, styles.land])
      })
    })

    describe('onClick()', () => {
      it('is called when the cell is clicked', () => {
        const onClickSpy = jest.fn()
        const gridCell = mount(
          <Grid.Cell state={0} rowIndex={0} colIndex={0} onClick={onClickSpy} />
        )
        gridCell.find('div')!.trigger('onClick')
        expect(onClickSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
