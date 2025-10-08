import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: t('nav.home'), href: '/', key: '/' },
    { name: t('nav.forSale'), href: '/satilik-evler', key: '/satilik-evler' },
    { name: t('nav.forRent'), href: '/kiralik-evler', key: '/kiralik-evler' },
    { name: t('nav.plots'), href: '/satilik-arsalar', key: '/satilik-arsalar' },
    { name: t('nav.about'), href: '/hakkimizda', key: '/hakkimizda' },
    { name: t('nav.contact'), href: '/iletisim', key: '/iletisim' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-all duration-300 hover:scale-105 group">
            <img src="/components/logo.png" alt="EmlakPlus Logo" className="h-12 w-auto group-hover:animate-pulse" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-600">EMLAK</span>
              <span className="text-lg font-semibold text-yellow-500">PLUS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.key}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 whitespace-nowrap hover:scale-105 animate-slide-up ${
                  location.pathname === item.key
                    ? 'text-blue-600 nav-active font-semibold'
                    : 'text-gray-600 hover:text-blue-600 hover:-translate-y-1'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme toggle and mobile menu buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
              title={theme === 'light' ? t('nav.darkMode') : t('nav.lightMode')}
            >
              {theme === 'light' ? <Moon size={24} className="hover:animate-pulse" /> : <Sun size={24} className="hover:animate-spin-slow" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              {isMenuOpen ? <X size={24} className="animate-wiggle" /> : <Menu size={24} className="hover:animate-bounce-subtle" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 text-base font-medium transition-all duration-300 rounded-md ${
                  location.pathname === item.key
                    ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 hover:translate-x-1'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
