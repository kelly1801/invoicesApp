import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import { CrudProvider } from './context/Crud.context'

ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <BrowserRouter>
          <CrudProvider>

                  <App />

          </CrudProvider>
      </BrowserRouter>
  </React.StrictMode>
)
