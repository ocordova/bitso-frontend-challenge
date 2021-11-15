import React from 'react'
import PropTypes from 'prop-types'

import '../global.css'
import { classNames } from '../../utils/css'

import { Cell } from './components/Cell'

export interface GridProps {
  /** Number of cols to display */
  cols?: number
  /** Number of rows to display */
  rows?: number
  /** Inner content of the element */
  children: React.ReactNode
}

const styles = {
  base: 'grid'
}

const gridClassName = (cols: GridProps['cols']) => {
  //TODO: Find a way to create a dynamic grid template in tailwind
  return classNames(styles.base)
}

export const Grid = ({ children, cols, rows }: GridProps) => {
  return (
    <div
      className={gridClassName(cols)}
      style={{ gridTemplateColumns: `repeat(${cols}, 20px)` }}
    >
      {children}
    </div>
  )
}

Grid.Cell = Cell

Grid.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  children: PropTypes.node
}
