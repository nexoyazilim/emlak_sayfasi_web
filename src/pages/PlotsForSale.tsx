import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { getPropertiesByType } from '../data/properties';
import { useLanguage } from '../contexts/LanguageContext';

export default function PlotsForSale() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState('all');
  const [areaRange, setAreaRange] = useState('all');
  const [city, setCity] = useState('all');
  const [sorting, setSorting] = useState('newest');
  const { t, language } = useLanguage();
  const properties = getPropertiesByType('plot');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = searchTerm === '' ||
      (property.title && property.title[language] && property.title[language].toLowerCase().includes(searchTerm.toLowerCase())) ||
      (property.location && property.location[language] && property.location[language].toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesPriceRange = priceRange === 'all' || (() => {
      const price = parseInt(property.price.replace(/[^0-9]/g, ''));
      switch (priceRange) {
        case '100-500':
          return price >= 100000 && price <= 500000;
        case '500-1000':
          return price >= 500000 && price <= 1000000;
        case '1000+':
          return price >= 1000000;
        default:
          return true;
      }
    })();

    const matchesAreaRange = areaRange === 'all' || (() => {
      const area = parseInt(property.area?.replace(/[^0-9]/g, '') || '0');
      switch (areaRange) {
        case '0-500':
          return area <= 500;
        case '500-1000':
          return area > 500 && area <= 1000;
        case '1000-2000':
          return area > 1000 && area <= 2000;
        case '2000+':
          return area > 2000;
        default:
          return true;
      }
    })();

    const matchesCity = city === 'all' || (property.location && property.location[language] && property.location[language].toLowerCase().includes(city.toLowerCase()));

    return matchesSearch && matchesPriceRange && matchesAreaRange && matchesCity;
  }).sort((a, b) => {
    switch (sorting) {
      case 'priceLowHigh':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'priceHighLow':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'areaLargeSmall':
        return parseInt((b.area || '0').replace(/[^0-9]/g, '')) - parseInt((a.area || '0').replace(/[^0-9]/g, ''));
      default: // newest
        return parseInt(b.id) - parseInt(a.id);
    }
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('nav.plots')}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t('categories.plots.description')}</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Konum, mahalle veya arsa türü arayın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors"
            >
              <Filter size={20} className="mr-2" />
              Filtreler
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('listing.priceRange')}</label>
                  <select 
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="all">{t('listing.allPrices')}</option>
                    <option value="100-500">100.000 - 500.000 TL</option>
                    <option value="500-1000">500.000 - 1.000.000 TL</option>
                    <option value="1000+">1.000.000 TL+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('listing.plotSize')}</label>
                  <select 
                    value={areaRange}
                    onChange={(e) => setAreaRange(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="all">{t('listing.allSizes')}</option>
                    <option value="0-500">500 m² ve altı</option>
                    <option value="500-1000">500-1000 m²</option>
                    <option value="1000-2000">1000-2000 m²</option>
                    <option value="2000+">2000 m² ve üzeri</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('listing.city')}</label>
                  <select 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="all">{t('listing.allCities')}</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="Ankara">Ankara</option>
                    <option value="İzmir">İzmir</option>
                    <option value="Antalya">Antalya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('listing.sorting')}</label>
                  <select 
                    value={sorting}
                    onChange={(e) => setSorting(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="newest">{t('listing.newest')}</option>
                    <option value="priceLowHigh">{t('listing.priceLowHigh')}</option>
                    <option value="priceHighLow">{t('listing.priceHighLow')}</option>
                    <option value="areaLargeSmall">{t('listing.areaLargeSmall')}</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">{filteredProperties.length}</span> sonuç bulundu
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div key={property.id} className={`animate-slide-up stagger-${(index % 6) + 1}`}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Arama kriterlerinize uygun ilan bulunamadı.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceRange('all');
                setAreaRange('all');
                setCity('all');
                setSorting('newest');
              }}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Filtreleri temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}