import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Home, Key, TreePine, ArrowRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { getFeaturedProperties } from '../data/properties';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();
  const featuredProperties = getFeaturedProperties();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Arama terimini URL parametresi olarak satılık evler sayfasına yönlendir
      navigate(`/satilik-evler?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-slide-up">
            {t('hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-3xl mx-auto animate-slide-up stagger-1">
            {t('hero.subtitle')}
          </p>
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto animate-slide-up stagger-2">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-3 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('hero.searchPlaceholder')}
                className="w-full pl-10 pr-4 py-3 text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none text-sm sm:text-base transition-all duration-300 focus:scale-105"
              />
            </div>
            <button 
              type="submit"
              className="bg-white text-blue-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap hover:scale-105 hover:shadow-lg animate-pulse-glow"
            >
              {t('hero.searchButton')}
            </button>
          </form>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">{t('categories.title')}</h2>
            <p className="text-gray-600 text-base sm:text-lg">{t('categories.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Link to="/satilik-evler" className="group animate-slide-left stagger-1 hover-lift">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 sm:p-8 text-white transform transition-all duration-500 shadow-lg animate-gradient hover:shadow-2xl hover-rotate">
                <Home size={40} className="mb-3 sm:mb-4 sm:w-12 sm:h-12 animate-bounce-subtle group-hover:animate-wiggle" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{t('categories.forSale.title')}</h3>
                <p className="text-blue-100 mb-3 sm:mb-4 text-sm sm:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">{t('categories.forSale.description')}</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('categories.forSale.action')} <ArrowRight size={16} className="ml-2 group-hover:animate-pulse" />
                </div>
              </div>
            </Link>

            <Link to="/kiralik-evler" className="group animate-slide-up stagger-2 hover-lift">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 sm:p-8 text-white transform transition-all duration-500 shadow-lg animate-gradient hover:shadow-2xl hover-rotate">
                <Key size={40} className="mb-3 sm:mb-4 sm:w-12 sm:h-12 animate-bounce-subtle group-hover:animate-wiggle" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{t('categories.forRent.title')}</h3>
                <p className="text-green-100 mb-3 sm:mb-4 text-sm sm:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">{t('categories.forRent.description')}</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('categories.forRent.action')} <ArrowRight size={16} className="ml-2 group-hover:animate-pulse" />
                </div>
              </div>
            </Link>

            <Link to="/satilik-arsalar" className="group sm:col-span-2 lg:col-span-1 animate-slide-right stagger-3 hover-lift">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 sm:p-8 text-white transform transition-all duration-500 shadow-lg animate-gradient hover:shadow-2xl hover-rotate">
                <TreePine size={40} className="mb-3 sm:mb-4 sm:w-12 sm:h-12 animate-bounce-subtle group-hover:animate-wiggle" />
                <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{t('categories.plots.title')}</h3>
                <p className="text-orange-100 mb-3 sm:mb-4 text-sm sm:text-base opacity-90 group-hover:opacity-100 transition-opacity duration-300">{t('categories.plots.description')}</p>
                <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {t('categories.plots.action')} <ArrowRight size={16} className="ml-2 group-hover:animate-pulse" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">{t('featured.title')}</h2>
            <p className="text-gray-600 text-base sm:text-lg">{t('featured.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProperties.map((property, index) => (
              <div key={property.id} className={`animate-slide-up stagger-${(index % 6) + 1}`}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/satilik-evler" 
              className="inline-flex items-center bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:shadow-lg animate-pulse-glow"
            >
              {t('featured.viewAll')}
              <ArrowRight size={16} className="ml-2 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="animate-slide-up stagger-1 hover:scale-110 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-float">20.000+</div>
              <div className="text-blue-100 text-sm sm:text-base">{t('stats.activeListings')}</div>
            </div>
            <div className="animate-slide-up stagger-2 hover:scale-110 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-float" style={{animationDelay: '1s'}}>75.000+</div>
              <div className="text-blue-100 text-sm sm:text-base">{t('stats.happyCustomers')}</div>
            </div>
            <div className="animate-slide-up stagger-3 hover:scale-110 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-float" style={{animationDelay: '2s'}}>81</div>
              <div className="text-blue-100 text-sm sm:text-base">{t('stats.cityCount')}</div>
            </div>
            <div className="animate-slide-up stagger-4 hover:scale-110 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 animate-float" style={{animationDelay: '3s'}}>24/7</div>
              <div className="text-blue-100 text-sm sm:text-base">{t('stats.support')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}