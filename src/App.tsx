import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    // Only scroll to top if the pathname changes
    if (location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';
import HomePage from './pages/HomePage';
import ForSaleProperties from './pages/ForSaleProperties';
import RentalProperties from './pages/RentalProperties';
import PlotsForSale from './pages/PlotsForSale';
import PropertyDetails from './pages/PropertyDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
        <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-900 flex flex-col text-gray-100">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/satilik-evler" element={<ForSaleProperties />} />
              <Route path="/kiralik-evler" element={<RentalProperties />} />
              <Route path="/satilik-arsalar" element={<PlotsForSale />} />
              <Route path="/ilan/:id" element={<PropertyDetails />} />
              <Route path="/hakkimizda" element={<AboutPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <LanguageSwitcher />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;