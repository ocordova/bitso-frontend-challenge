import React from 'react'

import '../global.css'
import { classNames } from '../../utils/css'

export interface CardProps {
  /** Title for the card */
  title?: string
  /** Card header actions */
  actions?: any
  /** Inner content of the element */
  children: React.ReactNode
}

const styles = {
  base: 'bg-white rounded-md border border-gray-100 shadow-md p-6'
}

export const Card = ({ children, title, actions }: CardProps) => {
  const titleMarkup = title ? (
    <h2 className="text-xl leading-6 font-medium text-gray-900">{title}</h2>
  ) : null

  const actionsMarkup = () => {
    return (
      <div className="flex mb-8 justify-between">
        {actions.map((action: any) => {
          return <div key={action.name}>{action}</div>
        })}
      </div>
    )
  }

  return (
    <div className={classNames(styles.base)}>
      <div className="mb-4">{titleMarkup}</div>
      <div> {actionsMarkup()}</div>
      {children}
    </div>
  )
}
