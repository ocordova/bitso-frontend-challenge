import React from 'react'

import '../global.css'
import { classNames } from '../../utils/css'

export interface CardProps {
  /** Inner content of the element */
  children: React.ReactNode
}

const styles = {
  base: 'bg-white rounded-md border border-gray-100 shadow-md p-6'
}

export const Card = ({ children }: CardProps) => {
  return <div className={classNames(styles.base)}>{children}</div>
}
