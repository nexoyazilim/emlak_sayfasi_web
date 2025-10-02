import { useState } from 'react';
import { Globe, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'tr' as const, name: t('language.turkish'), flag: '🇹🇷' },
    { code: 'en' as const, name: t('language.english'), flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Language Options */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-slide-up">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="font-medium whitespace-nowrap">{lang.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center space-x-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-full px-4 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
            isOpen ? 'bg-gray-50' : ''
          }`}
        >
          <Globe size={20} className="text-blue-600" />
          <span className="text-xl">{currentLanguage?.flag}</span>
          <span className="font-medium text-gray-700 hidden sm:block">
            {currentLanguage?.name}
          </span>
          <ChevronUp 
            size={16} 
            className={`text-gray-500 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
