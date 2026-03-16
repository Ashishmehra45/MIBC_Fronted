import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import Home from '../pages/Home';

function App() {
  return (
    <Router>
      <Header />
      
      {/* min-h-screen taaki footer hamesha bottom par rahe agar content kam ho */}
      <main className="min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="p-10">About Page Coming Soon</div>} />
          {/* Baaki routes bhi yahan aayenge */}
        </Routes>
      </main>

      <Footer /> {/* 2. Footer ko Routes ke niche chipka do */}
    </Router>
  );
}

export default App;