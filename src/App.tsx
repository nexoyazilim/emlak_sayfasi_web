import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
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
        <div className="min-h-screen bg-gray-50 flex flex-col">
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