import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CrudProvider } from './context/Crud.context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CrudProvider>
    <App />
    </CrudProvider>
  </React.StrictMode>
)
