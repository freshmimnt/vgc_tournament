import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Teams from "./components/Teams";
import Pairings from "./components/Pairings";
import Matchups from './components/Matchups';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/pairing" element={<Pairings />} />
        <Route path="/matchups" element={<Matchups />} />
      </Routes>
    </Router>
  </StrictMode>,
)
