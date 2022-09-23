import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Medalls from './modules/medalls/Medalls';
import NextFights from './modules/upcomingFights/NextFights';
import GeneralAward from './modules/generalAward/GeneralAward';
import FilterGeneral from './modules/generalAward/FilterGeneral';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<App />} />
       <Route path="Medalleria" element={<Medalls />} />
       <Route path="CombatesProximos" element={<NextFights />} />
       <Route path="PremiacionGeneral" element={<GeneralAward />} />
       <Route path="PremiacionGeneral/:delation" element={<FilterGeneral />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
