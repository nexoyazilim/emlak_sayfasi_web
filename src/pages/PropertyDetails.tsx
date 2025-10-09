import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Square, Calendar, Car, Thermometer, Star, Phone, Mail } from 'lucide-react';
import { getPropertyById } from '../data/properties';
import { useLanguage } from '../contexts/LanguageContext';

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const property = getPropertyById(id || '');

  if (!property) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('common.notFound')}</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">
          {t('common.backToHome')}
        </Link>
      </div>
    );
  }

  const getStatusBadge = () => {
    if (property.status === 'sold') {
      return (
        <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
          {t('property.sold')}
        </div>
      );
    }
    if (property.status === 'rented') {
      return (
        <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
          {t('property.rented')}
        </div>
      );
    }
    return (
      <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
        {t('property.available')}
      </div>
    );
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to={property.type === 'rent' ? '/kiralik-evler' : property.type === 'plot' ? '/satilik-arsalar' : '/satilik-evler'}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            {t('common.goBack')}
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title[language]}
                  className="w-full h-96 object-cover"
                />
                {property.status !== 'available' && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm px-6 py-3 rounded-lg">
                      <span className="text-xl font-bold text-gray-800">
                        {property.status === 'sold' ? 'Bu İlan Satıldı' : 'Bu İlan Kiralandı'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Additional Images */}
              {property.images && property.images.length > 1 && (
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {property.images.slice(1, 5).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${property.title} - ${index + 2}`}
                        className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{property.title[language]}</h1>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin size={18} className="mr-2" />
                    {property.location[language]}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {property.status === 'sold' ? '---' : property.price}
                  </div>
                  {getStatusBadge()}
                </div>
              </div>

              {/* Property Features Grid */}
              {(property.bedrooms || property.bathrooms || property.area) && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  {property.bedrooms && (
                    <div className="flex items-center space-x-2">
                      <Bed size={20} className="text-gray-600" />
                      <div>
                        <div className="font-semibold">{property.bedrooms}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Yatak Odası</div>
                      </div>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center space-x-2">
                      <Bath size={20} className="text-gray-600" />
                      <div>
                        <div className="font-semibold">{property.bathrooms}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Banyo</div>
                      </div>
                    </div>
                  )}
                  {property.area && (
                    <div className="flex items-center space-x-2">
                      <Square size={20} className="text-gray-600" />
                      <div>
                        <div className="font-semibold">{property.area}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Alan</div>
                      </div>
                    </div>
                  )}
                  {property.plotSize && (
                    <div className="flex items-center space-x-2">
                      <Square size={20} className="text-gray-600" />
                      <div>
                        <div className="font-semibold">{property.plotSize}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Arsa Alanı</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Açıklama</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{property.description[language]}</p>
              </div>

              {/* Features */}
              {property.features && property.features[language].length > 0 && (
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Özellikler</h2>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {property.features[language].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star size={16} className="text-blue-600" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Details */}
              <div className="grid sm:grid-cols-2 gap-6">
                {property.yearBuilt && (
                  <div className="flex items-center space-x-2">
                    <Calendar size={18} className="text-gray-600" />
                    <div>
                      <span className="text-sm text-gray-600">Yapım Yılı: </span>
                      <span className="font-semibold">{property.yearBuilt}</span>
                    </div>
                  </div>
                )}
                {property.heating && (
                  <div className="flex items-center space-x-2">
                    <Thermometer size={18} className="text-gray-600" />
                    <div>
                      <span className="text-sm text-gray-600">Isıtma: </span>
                      <span className="font-semibold">{property.heating[language]}</span>
                    </div>
                  </div>
                )}
                {property.parking && (
                  <div className="flex items-center space-x-2">
                    <Car size={18} className="text-gray-600" />
                    <div>
                      <span className="text-sm text-gray-600">Otopark: </span>
                      <span className="font-semibold">{property.parking[language]}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">İletişim</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Emlak Danışmanı"
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                  <div className="font-semibold text-gray-800 dark:text-white">Mehmet Öz</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Emlak Danışmanı</div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href="tel:+905551234567"
                    className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    Hemen Ara
                  </a>
                  <a
                    href="mailto:mehmet@emlakplus.com"
                    className="flex items-center justify-center w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Mail size={18} className="mr-2" />
                    E-posta Gönder
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Hızlı Bilgi</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">İlan No:</span>
                  <span className="font-semibold dark:text-white">{property.id.padStart(6, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">İlan Türü:</span>
                  <span className="font-semibold dark:text-white">
                    {property.type === 'sale' ? 'Satılık' : property.type === 'rent' ? 'Kiralık' : 'Arsa'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Durum:</span>
                  <span className="font-semibold dark:text-white">
                    {property.status === 'available' ? 'Müsait' : property.status === 'sold' ? 'Satıldı' : 'Kiralandı'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}