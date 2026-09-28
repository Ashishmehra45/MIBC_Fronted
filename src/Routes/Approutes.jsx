import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

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
import Events from '../pages/Events';
import Sectors from '../pages/Sectors';
import Membership from '../pages/Membership';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Initiatives from '../pages/Initatives';
import MembershipPlans from '../pages/Membership_Plan';
import Preloader from '../pages/Preloader';
import MembershipForm from '../pages/MembershipForm';
import ScrollToTop from '../components/ScrollToTop';
import EventsGallery from '../pages/Event_Gallary';
import TermsAndConditions from '../pages/Terms&conditions';
import Cohortdashboard from '../pages/Cohortdashboard';
import TequilaLogin from '../pages/Tequila-login';
import CohortRegister from '../pages/CohortRegister';

function AppContent() {
  const location = useLocation();

  // In pages par Header hide rahega
  const hideHeader =
    location.pathname === '/tequila-accelerator' ||
    location.pathname === '/cohort-dashboard' ||
    location.pathname === '/tequila-login' ||
    location.pathname === '/cohort-register';

  // In pages par Footer bhi hide rahega
  const hideFooter =
    location.pathname === '/cohort-dashboard' ||
    location.pathname === '/tequila-login' ||
    location.pathname === '/cohort-register';

  return (
    <>
      <ScrollToTop />
      <Preloader />

      {/* Header */}
      {!hideHeader && <Header />}

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/services/investment-facilitation"
            element={<InvestmentFacilitation />}
          />

          <Route
            path="/services/trade-promotion"
            element={<TradePromotion />}
          />

          <Route
            path="/services/delegation-facilitation"
            element={<DelegationFacilitation />}
          />

          <Route
            path="/services/intelligence-advocacy"
            element={<IntelligenceAdvocacy />}
          />

          <Route
            path="/tequila-accelerator"
            element={<TequilaAccelerator />}
          />

          <Route
            path="/initiatives/launchpad"
            element={<Launchpad />}
          />

          <Route
            path="/initiatives/events"
            element={<Events />}
          />

          <Route path="/sectors" element={<Sectors />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/membership-plans" element={<MembershipPlans />} />
          <Route path="/membership-form" element={<MembershipForm />} />
          <Route path="/events-gallery" element={<EventsGallery />} />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />

          {/* Cohort Dashboard */}
          <Route
            path="/cohort-dashboard"
            element={<Cohortdashboard />}
          />

          {/* Tequila Login */}
          <Route
            path="/tequila-login"
            element={<TequilaLogin />}
          />

          {/* Cohort Register */}
          <Route
            path="/cohort-register"
            element={<CohortRegister />}
          />
        </Routes>
      </main>

      {/* Footer */}
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;