import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shape from './Shape.jsx'
import Shapes from './Shapes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Shapes />
  </React.StrictMode>,
)
