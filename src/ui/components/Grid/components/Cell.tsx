import React from 'react'
import PropTypes from 'prop-types'

import '../../global.css'
import { classNames } from '../../../utils/css'

export interface CellProps {
  /** Represents the state of the cell */
  state: number
  /** Callback when a cell is clicked */
  onClick?(): void
}

const styles = {
  base: 'w-5 h-5 border border-blue-400 hover:opacity-50 flex items-center cursor-pointer',
  land: 'bg-green-400',
  water: 'bg-blue-500'
}

const cellClassName = (state: CellProps['state']) => {
  return classNames(
    ...[styles.base, state === 1 && styles.land, state === 0 && styles.water]
  )
}

export const Cell = ({ onClick, state }: CellProps) => {
  return <div className={cellClassName(state)} onClick={onClick}></div>
}

Cell.propTypes = {
  state: PropTypes.number,
  onclick: PropTypes.func
}
