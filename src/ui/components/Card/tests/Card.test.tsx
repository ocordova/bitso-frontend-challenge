import React from 'react'
import { mount } from '@shopify/react-testing'

import { Card } from '../Card'

const MyComponent = () => <div />

describe('<Card />', () => {
  it('renders children', () => {
    const card = mount(
      <Card>
        <MyComponent />
      </Card>
    )
    expect(card).toContainReactComponent(MyComponent)
  })
})
