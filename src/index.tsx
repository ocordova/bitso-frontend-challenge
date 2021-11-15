import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { MainView } from './ui/views/Main'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <div className="flex h-screen w-full bg-gray-50 justify-center items-center">
      <MainView />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
