import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import '../../global.css'
import { classNames } from '../../../utils/css'

export interface CellProps {
  /** Represents the state of the cell */
  state: number
  /** Cell row position in the board */
  rowIndex: number
  /** Cell col position in the board */
  colIndex: number
  /** Callback when a cell is clicked */
  onClick?(rowIndex: number, colIndex: number): void
}

export const styles = {
  base: 'w-5 h-5 border border-blue-400 hover:opacity-50 flex items-center cursor-pointer',
  land: 'bg-green-400',
  water: 'bg-blue-500'
}

const cellClassName = (state: CellProps['state']) => {
  return classNames(
    ...[styles.base, state === 1 && styles.land, state === 0 && styles.water]
  )
}

export const Cell = ({ onClick, state, rowIndex, colIndex }: CellProps) => {
  const handleCellClick = useCallback(() => {
    onClick && onClick(rowIndex, colIndex)
  }, [colIndex, onClick, rowIndex])

  return <div className={cellClassName(state)} onClick={handleCellClick}></div>
}

Cell.propTypes = {
  state: PropTypes.number,
  onclick: PropTypes.func
}
