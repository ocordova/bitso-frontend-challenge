import React, { useCallback } from 'react'

import '../global.css'
import { classNames } from '../../utils/css'

type Type = 'text' | 'number'

type InputMode = 'none' | 'text' | 'numeric'

export interface TextFieldProps {
  /* Hint text to display */
  placeholder?: string
  /* Initial value for the input */
  value?: string | number
  /* Label for the input */
  label: string
  /* Name of the input */
  name: string
  /* Determine type of input */
  type?: Type
  /* Choose the keyboard that should be used on mobile devices */
  inputMode?: InputMode
  /** Behavior of the native HTML attribute, limiting the minimum value */
  min?: number
  /* Callback when value is changed */
  onChange?(value: string, name: string): void
}

const styles = {
  base: 'mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-100 focus:border-blue-100 sm:text-sm'
}

export const TextField = ({
  placeholder,
  value,
  label,
  name,
  type,
  inputMode,
  min,
  onChange
}: TextFieldProps) => {
  const inputClassName = classNames(styles.base)

  const handleInputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event.currentTarget.value, name)
    },
    [onChange, name]
  )

  return (
    <label className="block w-full">
      <span className="block text-sm font-medium text-gray-700">{label}</span>
      <div className="mt-1">
        <input
          type={type ? type : 'text'}
          name={name}
          value={value}
          min={min}
          inputMode={inputMode}
          className={inputClassName}
          placeholder={placeholder}
          onChange={handleInputValueChange}
        ></input>
      </div>
    </label>
  )
}
