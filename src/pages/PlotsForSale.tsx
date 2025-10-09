import { useState } from 'react';
import { Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { getPropertiesByType } from '../data/properties';
import { useLanguage } from '../contexts/LanguageContext';

export default function PlotsForSale() {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [city, setCity] = useState('all');
  const [sorting, setSorting] = useState('newest');
  const { t, language } = useLanguage();
  const properties = getPropertiesByType('plot');

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = searchTerm === '' ||
      (property.title && property.title[language] && property.title[language].toLowerCase().includes(searchTerm.toLowerCase())) ||
      (property.location && property.location[language] && property.location[language].toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesPriceRange = (() => {
      const price = parseInt(property.price.replace(/[^0-9]/g, ''));
      if (!minPrice && !maxPrice) return true;
      if (minPrice && !maxPrice) return price >= parseInt(minPrice);
      if (!minPrice && maxPrice) return price <= parseInt(maxPrice);
      return price >= parseInt(minPrice) && price <= parseInt(maxPrice);
    })();

    const matchesCity = city === 'all' || (property.location && property.location[language] && property.location[language].toLowerCase().includes(city.toLowerCase()));

    const matchesFeatures = selectedFeatures.length === 0 || 
      (property.features && property.features[language] && 
       selectedFeatures.every(feature => property.features[language].includes(feature)));

    return matchesSearch && matchesPriceRange && matchesCity && matchesFeatures;
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
          <h1 className="text-3xl font-bold text-white mb-4">{t('nav.plots')}</h1>
          <p className="text-gray-300">{t('categories.plots.description')}</p>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            <span className="font-semibold">{filteredProperties.length}</span> {t('listing.resultsFound')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-white mb-6">Filtreler</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Arama</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder={t('listing.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Fiyat Aralığı</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                  />
                </div>
              </div>

              {/* City */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Şehir</label>
                <select 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                >
                  <option value="all">{t('listing.allCities')}</option>
                  <option value="İstanbul">İstanbul</option>
                  <option value="Ankara">Ankara</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Antalya">Antalya</option>
                  <option value="Bursa">Bursa</option>
                  <option value="Muğla">Muğla</option>
                </select>
              </div>

              {/* Features */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Özellikler</label>
                <div className="space-y-2">
                  {['İmarlı', 'Yola Cepheli', 'Elektrik', 'Su'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feature)}
                        onChange={() => toggleFeature(feature)}
                        className="rounded border-gray-600 text-blue-600 focus:ring-blue-500 bg-gray-700"
                      />
                      <span className="ml-2 text-gray-300">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sorting */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Sıralama</label>
                <select 
                  value={sorting}
                  onChange={(e) => setSorting(e.target.value)}
                  className="w-full border border-gray-600 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                >
                  <option value="newest">{t('listing.newest')}</option>
                  <option value="priceLowHigh">{t('listing.priceLowHigh')}</option>
                  <option value="priceHighLow">{t('listing.priceHighLow')}</option>
                  <option value="areaLargeSmall">{t('listing.areaLargeSmall')}</option>
                </select>
              </div>

              {/* Clear Filters Button */}
              <button
                onClick={() => {
                  setSearchTerm('');
                  setMinPrice('');
                  setMaxPrice('');
                  setCity('all');
                  setSelectedFeatures([]);
                  setSorting('newest');
                }}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                Filtreleri Temizle
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <div key={property.id} className={`animate-slide-up stagger-${(index % 6) + 1}`}>
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">{t('listing.noResults')}</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setMinPrice('');
                setMaxPrice('');
                setCity('all');
                setSelectedFeatures([]);
                setSorting('newest');
              }}
              className="mt-4 text-blue-400 hover:text-blue-300 font-medium"
            >
              {t('listing.clearFilters')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}