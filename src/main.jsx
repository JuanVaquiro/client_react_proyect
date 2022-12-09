import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Medalls from './modules/medalls/Medalls';
import NextFights from './modules/upcomingFights/NextFights';
import GeneralAward from './modules/generalAward/GeneralAward';
import FilterGeneral from './modules/generalAward/FilterGeneral';
import Portal from './portal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Portal />} />
       <Route path='/proyecto1/' element={<App />} />
       <Route path="/proyecto1/Medalleria" element={<Medalls />} />
       <Route path="/proyecto1/CombatesProximos" element={<NextFights />} />
       <Route path="/proyecto1/PremiacionGeneral" element={<GeneralAward />} />
       <Route path="/proyecto1/PremiacionGeneral/:delation" element={<FilterGeneral />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
