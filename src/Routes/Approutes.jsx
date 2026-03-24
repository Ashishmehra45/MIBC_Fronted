import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import Home from '../pages/Home';
import About from '../pages/About';
import InvestmentFacilitation from '../pages/Investment_Facilitation';
import TradePromotion from '../pages/TradePromotion';
import DelegationFacilitation from '../pages/Delegation';
import IntelligenceAdvocacy from '../pages/Intelligance_Advocy';
import TequilaAccelerator from '../pages/TequilaAccelerator';
import Launchpad from '../pages/Launchpad';

function App() {
  return (
    <Router>
      <Header />
      
      {/* min-h-screen taaki footer hamesha bottom par rahe agar content kam ho */}
      <main className="min-h-screen"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About /> } />
          <Route path="/services/investment-facilitation" element={<InvestmentFacilitation />} />
          <Route path="/services/trade-promotion" element={<TradePromotion />} />
          <Route path="/services/delegation-facilitation" element={<DelegationFacilitation />} />
          <Route path="/services/intelligence-advocacy" element={<IntelligenceAdvocacy />} />
          <Route path="/initiatives/tequila-accelerator" element={<TequilaAccelerator />} />
          <Route path="/initiatives/launchpad" element={<Launchpad />} />
        </Routes>
      </main>

      <Footer /> {/* 2. Footer ko Routes ke niche chipka do */}
    </Router>
  );
}

export default App;