import React from 'react'
import { mount } from '@shopify/react-testing'

import { TextField } from '../TextField'

describe('<TextField />', () => {
  describe('onChange()', () => {
    it('is called with value is changed and returns value and name', () => {
      const spy = jest.fn()
      const element = mount(
        <TextField label="label" name="name" onChange={spy} />
      )

      element.find('input')!.trigger('onChange', {
        currentTarget: {
          value: '1',
          name: 'name'
        }
      })
      expect(spy).toHaveBeenCalledWith('1', 'name')
    })
  })
})
