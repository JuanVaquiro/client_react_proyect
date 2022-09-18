import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Medalls from './modules/medalls/Medalls';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<App />} />
       <Route path="Medalleria" element={<Medalls />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
