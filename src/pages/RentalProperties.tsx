import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { getPropertiesByType } from '../data/properties';
import { useLanguage } from '../contexts/LanguageContext';

export default function RentalProperties() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage();
  const properties = getPropertiesByType('rent');

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('nav.forRent')}</h1>
          <p className="text-gray-600">{t('categories.forRent.description')}</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Konum, mahalle veya emlak türü arayın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kira Aralığı</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Tüm Fiyatlar</option>
                    <option>5.000 - 10.000 TL</option>
                    <option>10.000 - 20.000 TL</option>
                    <option>20.000 TL+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Oda Sayısı</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Tümü</option>
                    <option>1+0</option>
                    <option>1+1</option>
                    <option>2+1</option>
                    <option>3+1</option>
                    <option>4+1 ve üzeri</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Şehir</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Tüm Şehirler</option>
                    <option>İstanbul</option>
                    <option>Ankara</option>
                    <option>İzmir</option>
                    <option>Antalya</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sıralama</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>En Yeni</option>
                    <option>Kira (Düşük-Yüksek)</option>
                    <option>Kira (Yüksek-Düşük)</option>
                    <option>Alan (Büyük-Küçük)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
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
            <p className="text-gray-500 text-lg">Arama kriterlerinize uygun ilan bulunamadı.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Filtreleri temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}