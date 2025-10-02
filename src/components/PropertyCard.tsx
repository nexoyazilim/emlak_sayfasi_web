import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  status?: 'available' | 'sold' | 'rented';
  type?: 'sale' | 'rent';
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { t } = useLanguage();
  const getStatusBadge = () => {
    if (property.status === 'sold') {
      return (
        <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {t('property.sold')}
        </div>
      );
    }
    if (property.status === 'rented') {
      return (
        <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {t('property.rented')}
        </div>
      );
    }
    return null;
  };

  const isUnavailable = property.status === 'sold' || property.status === 'rented';

  return (
    <Link to={`/ilan/${property.id}`} className="group block animate-slide-up hover-lift">
      <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover-rotate ${
        isUnavailable ? 'opacity-75 grayscale' : 'hover:shadow-2xl'
      }`}>
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className={`w-full h-40 sm:h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${
              isUnavailable ? 'grayscale' : ''
            }`}
          />
          {getStatusBadge()}
        </div>
        
        <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
          <div>
            <h3 className={`font-semibold text-base sm:text-lg transition-colors line-clamp-2 ${
              isUnavailable ? 'text-gray-500' : 'text-gray-800 group-hover:text-blue-600'
            }`}>
              {property.title}
            </h3>
            <div className="flex items-center text-gray-600 text-xs sm:text-sm mt-1">
              <MapPin size={12} className="mr-1 flex-shrink-0" />
              <span className="truncate">{property.location}</span>
            </div>
          </div>

          <div className={`text-xl sm:text-2xl font-bold transition-all duration-300 group-hover:scale-105 ${
            isUnavailable ? 'text-gray-400' : 'text-blue-600 group-hover:text-blue-700'
          }`}>
            {isUnavailable && property.status === 'sold' ? '---' : property.price}
          </div>

          {(property.bedrooms || property.bathrooms || property.area) && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-100">
              {property.bedrooms && (
                <div className="flex items-center whitespace-nowrap">
                  <Bed size={12} className="mr-1" />
                  <span className="hidden sm:inline">{property.bedrooms} {t('property.bedrooms')}</span>
                  <span className="sm:hidden">{property.bedrooms} oda</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center whitespace-nowrap">
                  <Bath size={12} className="mr-1" />
                  <span className="hidden sm:inline">{property.bathrooms} {t('property.bathrooms')}</span>
                  <span className="sm:hidden">{property.bathrooms} {t('property.bathrooms')}</span>
                </div>
              )}
              {property.area && (
                <div className="flex items-center whitespace-nowrap">
                  <Square size={12} className="mr-1" />
                  {property.area}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}