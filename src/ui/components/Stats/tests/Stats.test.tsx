import React from 'react'
import { mount } from '@shopify/react-testing'

import { Stats } from '../Stats'

describe('<Stats />', () => {
  const renderChildren = () =>
    [0, 1].map((i) => <Stats.Item key={i}></Stats.Item>)

  it('renders its children', () => {
    const stack = mount(<Stats>{renderChildren()}</Stats>)

    expect(stack).toContainReactComponentTimes(Stats.Item, 2)
  })

  describe('<Stats.Item />', () => {
    it('has a title text when the title is a string', () => {
      const title = 'Islands'
      const item = mount(<Stats.Item title={title} />)

      expect(item.find('dt')).toContainReactText(title)
    })

    it('has a value text when the value is a number', () => {
      const value = 5
      const item = mount(<Stats.Item value={value} />)

      expect(item.find('dd')).toContainReactText(value)
    })
  })
})
