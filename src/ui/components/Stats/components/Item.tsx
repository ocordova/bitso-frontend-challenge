import React from 'react'

import '../../global.css'

export interface ItemProps {
  /** Title of the element */
  title?: string
  /** Value fo the element*/
  value?: number
}

export const Item = ({ title, value }: ItemProps) => {
  return (
    <div className="pt-3 text-right">
      {title && <dt className="text-sm font-medium text-gray-500">{title}</dt>}
      {value && <dd className="mt-1 text-sm text-gray-900">{value}</dd>}
    </div>
  )
}
