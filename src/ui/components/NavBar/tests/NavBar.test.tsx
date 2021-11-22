import React from 'react'
import { mount } from '@shopify/react-testing'

import { NavBar } from '../NavBar'
import { TextField } from '../..'

const settings = {
  rows: 5,
  cols: 9
}

describe('<NavBar />', () => {
  it('Render two TextFields with default values', () => {
    const navBar = mount(<NavBar settings={settings} />)

    expect(navBar).toContainReactComponent(TextField, { value: 5 })
    expect(navBar).toContainReactComponent(TextField, { value: 9 })
  })

  describe('onChange()', () => {
    it('is called when resize button is called', () => {
      const spy = jest.fn()
      const navBar = mount(<NavBar settings={settings} onChange={spy} />)

      navBar.find('button')!.trigger('onClick')
      expect(spy).toHaveBeenCalledWith(5, 9)
    })
  })
})
