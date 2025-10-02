import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-blue-400">
              <Home size={24} />
              <span className="text-lg font-bold text-white">EmlakPlus</span>
            </div>
            <p className="text-sm">
              {t('footer.companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/satilik-evler" className="text-sm hover:text-blue-400 transition-colors">Satılık Evler</Link></li>
              <li><Link to="/kiralik-evler" className="text-sm hover:text-blue-400 transition-colors">Kiralık Evler</Link></li>
              <li><Link to="/satilik-arsalar" className="text-sm hover:text-blue-400 transition-colors">Satılık Arsalar</Link></li>
              <li><Link to="/hakkimizda" className="text-sm hover:text-blue-400 transition-colors">Hakkımızda</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li className="text-sm">Emlak Danışmanlığı</li>
              <li className="text-sm">Değer Analizi</li>
              <li className="text-sm">Kredi Danışmanlığı</li>
              <li className="text-sm">Yasal Destek</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={14} />
                <span>+90 212 555 0123</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={14} />
                <span>info@emlakplus.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <MapPin size={14} />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">&copy; 2024 EmlakPlus. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}