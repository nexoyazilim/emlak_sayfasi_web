import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { getPropertiesByType } from '../data/properties';
import { useLanguage } from '../contexts/LanguageContext';

export default function ForSaleProperties() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage();
  const properties = getPropertiesByType('sale');

  // URL'den arama parametresini al
  useEffect(() => {
    const urlSearchTerm = searchParams.get('search');
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [searchParams]);

  const [priceRange, setPriceRange] = useState('all');
  const [roomCount, setRoomCount] = useState('all');
  const [city, setCity] = useState('all');
  const [sorting, setSorting] = useState('newest');
  const { language } = useLanguage();

  const filteredProperties = properties.filter(property => {
    const matchesSearch = searchTerm === '' ||
      (property.title && property.title[language] && property.title[language].toLowerCase().includes(searchTerm.toLowerCase())) ||
      (property.location && property.location[language] && property.location[language].toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesPriceRange = priceRange === 'all' || (() => {
      const price = parseInt(property.price.replace(/[^0-9]/g, ''));
      switch (priceRange) {
        case '500-1000':
          return price >= 500000 && price <= 1000000;
        case '1000-2000':
          return price >= 1000000 && price <= 2000000;
        case '2000+':
          return price >= 2000000;
        default:
          return true;
      }
    })();

    const matchesRoomCount = roomCount === 'all' || (() => {
      switch (roomCount) {
        case '1+0':
          return property.bedrooms === 1;
        case '1+1':
          return property.bedrooms === 2;
        case '2+1':
          return property.bedrooms === 3;
        case '3+1':
          return property.bedrooms === 4;
        case '4+':
          return property.bedrooms ? property.bedrooms >= 5 : false;
        default:
          return true;
      }
    })();

    const matchesCity = city === 'all' || (property.location && property.location[language] && property.location[language].toLowerCase().includes(city.toLowerCase()));

    return matchesSearch && matchesPriceRange && matchesRoomCount && matchesCity;
  }).sort((a, b) => {
    switch (sorting) {
      case 'priceLowHigh':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'priceHighLow':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'areaLargeSmall':
        return parseInt(b.area || '0') - parseInt(a.area || '0');
      default: // newest
        return parseInt(b.id) - parseInt(a.id);
    }
  });

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('nav.forSale')}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t('categories.forSale.description')}</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('listing.searchPlaceholder')}
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
              {t('listing.filters')}
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
                    <option value="500-1000">500.000 - 1.000.000 TL</option>
                    <option value="1000-2000">1.000.000 - 2.000.000 TL</option>
                    <option value="2000+">2.000.000 TL+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('listing.roomCount')}</label>
                  <select 
                    value={roomCount}
                    onChange={(e) => setRoomCount(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  >
                    <option value="all">{t('listing.allRooms')}</option>
                    <option value="1+0">1+0</option>
                    <option value="1+1">1+1</option>
                    <option value="2+1">2+1</option>
                    <option value="3+1">3+1</option>
                    <option value="4+">4+1 {t('listing.andMore')}</option>
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
            <span className="font-semibold">{filteredProperties.length}</span> {t('listing.resultsFound')}
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
            <p className="text-gray-500 text-lg">{t('listing.noResults')}</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceRange('all');
                setRoomCount('all');
                setCity('all');
                setSorting('newest');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              {t('listing.clearFilters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}