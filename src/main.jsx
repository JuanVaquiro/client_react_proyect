import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Medalleria from './modules/medalleria/Medalleria';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<App />} />
       <Route path="Medalleria" element={<Medalleria />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
