import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage'; // Make sure the path matches where you saved your file
import InputPage from './InputPage';
import QuotePage from './QuotePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
