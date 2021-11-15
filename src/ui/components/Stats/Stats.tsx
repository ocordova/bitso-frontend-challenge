import React, { Children } from 'react'

import '../global.css'
import { classNames } from '../../utils/css'

import { Item } from './components/Item'

export interface StatsProps {
  /** Inner content of the element */
  children: React.ReactNode
}

const styles = {
  base: 'flex flex-row justify-end space-x-8'
}

export const Stats = ({ children }: StatsProps) => {
  const AllChildren = Children.map(children, (child) => child)

  return <dl className={classNames(styles.base)}>{AllChildren}</dl>
}

Stats.Item = Item
