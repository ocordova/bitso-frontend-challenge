import React, { useState, useCallback } from 'react'

import '../global.css'
import { TextField } from '../'

export interface Settings {
  rows: number
  cols: number
}

export interface NavBarProps {
  /** Number of cols to display */
  settings: Settings
  /* Callback settings value is changed */
  onChange?(rows: Settings['rows'], cols: Settings['cols']): void
}

export const NavBar = ({ settings, onChange }: NavBarProps) => {
  const [rows, setRows] = useState(settings.rows)
  const [cols, setCols] = useState(settings.cols)

  const handleRowsChange = useCallback(
    (newValue) => setRows(parseInt(newValue)),
    []
  )

  const handleColsChange = useCallback(
    (newValue) => setCols(parseInt(newValue)),
    []
  )

  const resize = useCallback(() => {
    onChange && onChange(rows, cols)
  }, [onChange])

  return (
    <nav className="mx-auto px-8 md:px-0 bg-white">
      <div className="flex justify-center py-4 border-b border-gray-200">
        <div className="flex">
          <div className="mt-4 flex md:mt-0 md:ml-4 space-x-4">
            <TextField
              label="Rows"
              name="rows"
              value={rows}
              min={1}
              type="number"
              inputMode="numeric"
              onChange={handleRowsChange}
            />
            <TextField
              label="Cols"
              name="cols"
              value={cols}
              min={1}
              type="number"
              inputMode="numeric"
              onChange={handleColsChange}
            />
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={resize}
              className="flex flex-1 ml-4 items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Resize
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
