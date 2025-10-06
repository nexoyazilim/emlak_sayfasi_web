export interface Property {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  price: string;
  location: {
    tr: string;
    en: string;
  };
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  status: 'available' | 'sold' | 'rented';
  type: 'sale' | 'rent' | 'plot';
  description: {
    tr: string;
    en: string;
  };
  features: {
    tr: string[];
    en: string[];
  };
  yearBuilt?: number;
  plotSize?: string;
  heating?: {
    tr: string;
    en: string;
  };
  parking?: {
    tr: string;
    en: string;
  };
  images?: string[];
}

export const properties: Property[] = [
  // Satılık Evler
  {
    id: '1',
    title: {
      tr: 'Lüks Villa - Deniz Manzaralı',
      en: 'Luxury Villa - Sea View'
    },
    price: '2.500.000 TL',
    location: {
      tr: 'Antalya, Konyaaltı',
      en: 'Antalya, Konyaalti'
    },
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 4,
    bathrooms: 3,
    area: '280 m²',
    status: 'available',
    type: 'sale',
    description: {
      tr: 'Muhteşem deniz manzaralı lüks villa. Modern mimarisi ve geniş bahçesi ile dikkat çekiyor.',
      en: 'Luxurious villa with stunning sea views. Features modern architecture and a spacious garden.'
    },
    features: {
      tr: ['Deniz manzarası', 'Geniş bahçe', 'Modern mutfak', 'Şömine', 'Kapalı otopark'],
      en: ['Sea view', 'Spacious garden', 'Modern kitchen', 'Fireplace', 'Indoor parking']
    },
    yearBuilt: 2020,
    heating: {
      tr: 'Yerden ısıtma',
      en: 'Floor heating'
    },
    parking: {
      tr: '2 araçlık kapalı garaj',
      en: '2-car indoor garage'
    },
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: '2',
    title: {
      tr: 'Modern Şehir Dairesi',
      en: 'Modern City Apartment'
    },
    price: '850.000 TL',
    location: {
      tr: 'İstanbul, Kadıköy',
      en: 'Istanbul, Kadikoy'
    },
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 2,
    bathrooms: 1,
    area: '95 m²',
    status: 'available',
    type: 'sale',
    description: {
      tr: 'Şehir merkezinde modern daire. Toplu taşımaya yakın, alışveriş merkezlerine yürüme mesafesi.',
      en: 'Modern apartment in the city center. Close to public transport, walking distance to shopping centers.'
    },
    features: {
      tr: ['Merkezi konum', 'Modern mutfak', 'Balkon', 'Güvenlik'],
      en: ['Central location', 'Modern kitchen', 'Balcony', 'Security']
    },
    yearBuilt: 2018,
    heating: {
      tr: 'Kombi',
      en: 'Central heating'
    },
    parking: {
      tr: 'Sokak parkı',
      en: 'Street parking'
    },
  },
  {
    id: '3',
    title: {
      tr: 'Göl Kenarında Müstakil Ev',
      en: 'Lakeside Detached House'
    },
    price: '1.200.000 TL',
    location: {
      tr: 'Bursa, İznik',
      en: 'Bursa, Iznik'
    },
    image: 'https://images.pexels.com/photos/2089696/pexels-photo-2089696.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 3,
    bathrooms: 2,
    area: '180 m²',
    status: 'sold',
    type: 'sale',
    description: {
      tr: 'Göl kenarında huzurlu müstakil ev. Doğal güzelliklerle çevrili.',
      en: 'Peaceful detached house by the lake. Surrounded by natural beauty.'
    },
    features: {
      tr: ['Göl manzarası', 'Bahçe', 'Şömine', 'Sauna'],
      en: ['Lake view', 'Garden', 'Fireplace', 'Sauna']
    },
    yearBuilt: 2015,
    heating: {
      tr: 'Doğalgaz',
      en: 'Natural gas'
    },
    parking: {
      tr: 'Bahçe içi park',
      en: 'Garden parking'
    },
  },

  // Kiralık Evler
  {
    id: '4',
    title: {
      tr: 'Merkezi Konum 2+1 Daire',
      en: 'Central Location 2 Bedroom Apartment'
    },
    price: '12.000 TL/Ay',
    location: {
      tr: 'Ankara, Çankaya',
      en: 'Ankara, Cankaya'
    },
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 2,
    bathrooms: 1,
    area: '85 m²',
    status: 'available',
    type: 'rent',
    description: {
      tr: 'Şehir merkezinde kiralık daire. Metro durağına 5 dakika yürüme mesafesi.',
      en: 'Rental apartment in city center. 5 minutes walking distance to metro station.'
    },
    features: {
      tr: ['Metro yakını', 'Asansör', 'Balkon', 'Güvenlik'],
      en: ['Near metro', 'Elevator', 'Balcony', 'Security']
    },
    yearBuilt: 2017,
    heating: {
      tr: 'Merkezi ısıtma',
      en: 'Central heating'
    },
    parking: {
      tr: 'Kapalı otopark',
      en: 'Indoor parking'
    },
  },
  {
    id: '5',
    title: {
      tr: 'Bahçeli Müstakil Ev',
      en: 'House with Garden'
    },
    price: '18.000 TL/Ay',
    location: {
      tr: 'İzmir, Bornova',
      en: 'Izmir, Bornova'
    },
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 3,
    bathrooms: 2,
    area: '150 m²',
    status: 'rented',
    type: 'rent',
    description: {
      tr: 'Geniş bahçeli müstakil ev. Aile için ideal.',
      en: 'Detached house with large garden. Ideal for families.'
    },
    features: {
      tr: ['Büyük bahçe', 'Barbekü alanı', 'Çocuk oyun alanı'],
      en: ['Large garden', 'Barbecue area', 'Children\'s playground']
    },
    yearBuilt: 2019,
    heating: {
      tr: 'Doğalgaz',
      en: 'Natural gas'
    },
    parking: {
      tr: 'Bahçe içi park',
      en: 'Garden parking'
    },
  },
  {
    id: '6',
    title: {
      tr: 'Denize Yakın Dubleks',
      en: 'Duplex Near Sea'
    },
    price: '25.000 TL/Ay',
    location: {
      tr: 'İzmir, Çeşme',
      en: 'Izmir, Cesme'
    },
    image: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 4,
    bathrooms: 3,
    area: '200 m²',
    status: 'available',
    type: 'rent',
    description: {
      tr: 'Denize 200m mesafede dubleks daire. Yazlık olarak ideal.',
      en: 'Duplex apartment 200m from the sea. Ideal as a summer house.'
    },
    features: {
      tr: ['Denize yakın', 'Teras', 'Jakuzi', 'Klima'],
      en: ['Near sea', 'Terrace', 'Jacuzzi', 'Air conditioning']
    },
    yearBuilt: 2021,
    heating: {
      tr: 'Klima',
      en: 'Air conditioning'
    },
    parking: {
      tr: 'Açık otopark',
      en: 'Open parking'
    },
  },

  // Arsalar
  {
    id: '7',
    title: {
      tr: 'İmarlı Arsa - Yatırım Fırsatı',
      en: 'Zoned Land - Investment Opportunity'
    },
    price: '800.000 TL',
    location: {
      tr: 'İstanbul, Çatalca',
      en: 'Istanbul, Catalca'
    },
    image: 'https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=800',
    area: '1000 m²',
    status: 'available',
    type: 'plot',
    description: {
      tr: 'Gelişen bölgede imarlı arsa. Yatırım için ideal.',
      en: 'Zoned land in developing area. Ideal for investment.'
    },
    features: {
      tr: ['İmarlı', 'Elektrik var', 'Su var', 'Yola cephe'],
      en: ['Zoned', 'Electricity available', 'Water available', 'Road frontage']
    },
    plotSize: '1000 m²',
  },
  {
    id: '8',
    title: {
      tr: 'Deniz Manzaralı Arsa',
      en: 'Land with Sea View'
    },
    price: '1.500.000 TL',
    location: {
      tr: 'Muğla, Bodrum',
      en: 'Mugla, Bodrum'
    },
    image: 'https://images.pexels.com/photos/2635011/pexels-photo-2635011.jpeg?auto=compress&cs=tinysrgb&w=800',
    area: '800 m²',
    status: 'available',
    type: 'plot',
    description: {
      tr: 'Muhteşem deniz manzaralı arsa. Villa yapımı için uygun.',
      en: 'Land with stunning sea view. Suitable for villa construction.'
    },
    features: {
      tr: ['Deniz manzarası', 'İmarlı', 'Elektrik hazır', 'Su hazır'],
      en: ['Sea view', 'Zoned', 'Electricity ready', 'Water ready']
    },
    plotSize: '800 m²',
  },
  {
    id: '9',
    title: {
      tr: 'Köyde Bahçe Arsası',
      en: 'Garden Plot in Village'
    },
    price: '200.000 TL',
    location: {
      tr: 'Sakarya, Sapanca',
      en: 'Sakarya, Sapanca'
    },
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
    area: '2500 m²',
    status: 'sold',
    type: 'plot',
    description: {
      tr: 'Doğanın içinde büyük arsa. Tarım ve hayvancılık için uygun.',
      en: 'Large plot in nature. Suitable for agriculture and livestock.'
    },
    features: {
      tr: ['Geniş alan', 'Doğal çevre', 'Su kuyusu'],
      en: ['Large area', 'Natural environment', 'Water well']
    },
    plotSize: '2500 m²',
  },

  // Yeni Satılık Evler
  {
    id: '10',
    title: {
      tr: 'Bahçeşehirde Modern Daire',
      en: 'Modern Apartment in Bahcesehir'
    },
    price: '1.800.000 TL',
    location: {
      tr: 'İstanbul, Bahçeşehir',
      en: 'Istanbul, Bahcesehir'
    },
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 3,
    bathrooms: 2,
    area: '135 m²',
    status: 'available',
    type: 'sale',
    description: {
      tr: 'Modern yaşam kompleksinde, sosyal olanaklarla dolu daire. Metro bağlantısı mevcut.',
      en: 'Apartment in modern living complex with social facilities. Metro connection available.'
    },
    features: {
      tr: ['Sosyal tesis', 'Metro yakını', 'Güvenlik', 'Otopark', 'Spor salonu'],
      en: ['Social facility', 'Near metro', 'Security', 'Parking', 'Gym']
    },
    yearBuilt: 2019,
    heating: {
      tr: 'Merkezi ısıtma',
      en: 'Central heating'
    },
    parking: {
      tr: 'Kapalı otopark',
      en: 'Indoor parking'
    },
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
  },
  {
    id: '11',
    title: {
      tr: 'Beşiktaş Merkez Daire',
      en: 'Central Besiktas Apartment'
    },
    price: '3.500.000 TL',
    location: {
      tr: 'İstanbul, Beşiktaş',
      en: 'Istanbul, Besiktas'
    },
    image: 'https://images.pexels.com/photos/2080018/pexels-photo-2080018.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 2,
    bathrooms: 1,
    area: '90 m²',
    status: 'available',
    type: 'sale',
    description: {
      tr: 'Şehrin kalbi Beşiktaşta tarihi doku içinde modern daire.',
      en: 'Modern apartment in the historic texture of Besiktas, heart of the city.'
    },
    features: {
      tr: ['Merkezi konum', 'Tarihi bölge', 'Deniz yakını', 'Ulaşım'],
      en: ['Central location', 'Historic area', 'Near sea', 'Transportation']
    },
    yearBuilt: 2016,
    heating: {
      tr: 'Kombi',
      en: 'Individual heating'
    },
    parking: {
      tr: 'Sokak parkı',
      en: 'Street parking'
    },
  },
  {
    id: '12',
    title: {
      tr: 'Pendik Sahil Villa',
      en: 'Pendik Beachfront Villa'
    },
    price: '4.200.000 TL',
    location: {
      tr: 'İstanbul, Pendik',
      en: 'Istanbul, Pendik'
    },
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 5,
    bathrooms: 4,
    area: '350 m²',
    status: 'available',
    type: 'sale',
    description: {
      tr: 'Denize sıfır konumda lüks villa. Özel plaj erişimi mevcut.',
      en: 'Luxury villa on the beachfront. Private beach access available.'
    },
    features: {
      tr: ['Denize sıfır', 'Özel plaj', 'Bahçe', 'Havuz', 'Sauna'],
      en: ['Beachfront', 'Private beach', 'Garden', 'Pool', 'Sauna']
    },
    yearBuilt: 2021,
    heating: {
      tr: 'Yerden ısıtma',
      en: 'Floor heating'
    },
    parking: {
      tr: '3 araçlık garaj',
      en: '3-car garage'
    },
  },
  {
    id: '13',
    title: {
      tr: 'Ataşehir Modern Dubleks',
      en: 'Atasehir Modern Duplex'
    },
    price: '2.100.000 TL',
    location: {
      tr: 'İstanbul, Ataşehir',
      en: 'Istanbul, Atasehir'
    },
    image: 'https://images.pexels.com/photos/1832323/pexels-photo-1832323.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 4,
    bathrooms: 3,
    area: '180 m²',
    status: 'sold',
    type: 'sale',
    description: {
      tr: 'Modern mimarili dubleks daire. Finans merkezi yakınında.',
      en: 'Duplex apartment with modern architecture. Near financial center.'
    },
    features: {
      tr: ['Dubleks', 'Modern tasarım', 'İş merkezi yakını', 'Güvenlik'],
      en: ['Duplex', 'Modern design', 'Near business center', 'Security']
    },
    yearBuilt: 2020,
    heating: {
      tr: 'Merkezi ısıtma',
      en: 'Central heating'
    },
    parking: {
      tr: 'Kapalı otopark',
      en: 'Indoor parking'
    },
  },

  // Yeni Kiralık Evler
  {
    id: '14',
    title: {
      tr: 'Kadıköy Moda Studio',
      en: 'Kadikoy Moda Studio'
    },
    price: '8.500 TL/Ay',
    location: {
      tr: 'İstanbul, Kadıköy',
      en: 'Istanbul, Kadikoy'
    },
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 1,
    bathrooms: 1,
    area: '45 m²',
    status: 'available',
    type: 'rent',
    description: {
      tr: 'Modada deniz manzaralı studio daire. Çok merkezi konum.',
      en: 'Studio apartment with sea view in Moda. Very central location.'
    },
    features: {
      tr: ['Deniz manzarası', 'Merkezi konum', 'Eşyalı', 'Balkon'],
      en: ['Sea view', 'Central location', 'Furnished', 'Balcony']
    },
    yearBuilt: 2015,
    heating: {
      tr: 'Klima',
      en: 'Air conditioning'
    },
    parking: {
      tr: 'Sokak parkı',
      en: 'Street parking'
    },
  },
  {
    id: '15',
    title: {
      tr: 'Levent Plaza Dairesi',
      en: 'Levent Plaza Apartment'
    },
    price: '22.000 TL/Ay',
    location: {
      tr: 'İstanbul, Levent',
      en: 'Istanbul, Levent'
    },
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 3,
    bathrooms: 2,
    area: '140 m²',
    status: 'available',
    type: 'rent',
    description: {
      tr: 'Plazada lüks daire. İş merkezi içinde yaşam imkanı.',
      en: 'Luxury apartment in plaza. Living opportunity in business center.'
    },
    features: {
      tr: ['Plaza içi', 'Lüks', 'Güvenlik', 'Concierge', 'Şehir manzarası'],
      en: ['In plaza', 'Luxury', 'Security', 'Concierge', 'City view']
    },
    yearBuilt: 2018,
    heating: {
      tr: 'Merkezi ısıtma',
      en: 'Central heating'
    },
    parking: {
      tr: 'Valet park',
      en: 'Valet parking'
    },
  },
  {
    id: '16',
    title: {
      tr: 'Üsküdar Bosphorus Daire',
      en: 'Uskudar Bosphorus Apartment'
    },
    price: '28.000 TL/Ay',
    location: {
      tr: 'İstanbul, Üsküdar',
      en: 'Istanbul, Uskudar'
    },
    image: 'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 3,
    bathrooms: 2,
    area: '165 m²',
    status: 'rented',
    type: 'rent',
    description: {
      tr: 'Boğaz manzaralı prestijli daire. Tarihi yarımadada.',
      en: 'Prestigious apartment with Bosphorus view. In historical peninsula.'
    },
    features: {
      tr: ['Boğaz manzarası', 'Prestijli', 'Tarihi bölge', 'Teras'],
      en: ['Bosphorus view', 'Prestigious', 'Historic area', 'Terrace']
    },
    yearBuilt: 2017,
    heating: {
      tr: 'Kombi',
      en: 'Individual heating'
    },
    parking: {
      tr: 'Kapalı otopark',
      en: 'Indoor parking'
    },
  },
  {
    id: '17',
    title: {
      tr: 'Sarıyer Köy Evi',
      en: 'Sariyer Village House'
    },
    price: '15.000 TL/Ay',
    location: {
      tr: 'İstanbul, Sarıyer',
      en: 'Istanbul, Sariyer'
    },
    image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800',
    bedrooms: 4,
    bathrooms: 3,
    area: '220 m²',
    status: 'available',
    type: 'rent',
    description: {
      tr: 'Doğa içinde huzurlu köy evi. Şehir yakınında köy yaşamı.',
      en: 'Peaceful village house in nature. Village life near the city.'
    },
    features: {
      tr: ['Doğa içi', 'Bahçe', 'Şömine', 'Huzurlu', 'Temiz hava'],
      en: ['In nature', 'Garden', 'Fireplace', 'Peaceful', 'Fresh air']
    },
    yearBuilt: 2014,
    heating: {
      tr: 'Soba',
      en: 'Stove'
    },
    parking: {
      tr: 'Bahçe içi',
      en: 'Garden parking'
    },
  },

  // Yeni Arsalar
  {
    id: '18',
    title: {
      tr: 'Çekmeköy Yatırım Arsası',
      en: 'Cekmekoy Investment Plot'
    },
    price: '1.200.000 TL',
    location: {
      tr: 'İstanbul, Çekmeköy',
      en: 'Istanbul, Cekmekoy'
    },
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    area: '600 m²',
    status: 'available',
    type: 'plot',
    description: {
      tr: 'Gelişen bölgede yatırım fırsatı. İmar planı hazır.',
      en: 'Investment opportunity in developing area. Zoning plan ready.'
    },
    features: {
      tr: ['Yatırım fırsatı', 'İmar planı hazır', 'Gelişen bölge', 'Ulaşım'],
      en: ['Investment opportunity', 'Zoning plan ready', 'Developing area', 'Transportation']
    },
    plotSize: '600 m²',
  },
  {
    id: '19',
    title: {
      tr: 'Şile Orman Kenarı Arsa',
      en: 'Sile Forest Edge Plot'
    },
    price: '950.000 TL',
    location: {
      tr: 'İstanbul, Şile',
      en: 'Istanbul, Sile'
    },
    image: 'https://images.pexels.com/photos/2382894/pexels-photo-2382894.jpeg?auto=compress&cs=tinysrgb&w=800',
    area: '1200 m²',
    status: 'available',
    type: 'plot',
    description: {
      tr: 'Orman kenarında doğal yaşam için ideal arsa.',
      en: 'Ideal plot for natural living by the forest.'
    },
    features: {
      tr: ['Orman kenarı', 'Doğal yaşam', 'Temiz hava', 'Huzur'],
      en: ['Forest edge', 'Natural living', 'Fresh air', 'Peace']
    },
    plotSize: '1200 m²',
  },
  {
    id: '20',
    title: {
      tr: 'Büyükçekmece Göl Kenarı',
      en: 'Buyukcekmece Lakeside'
    },
    price: '2.800.000 TL',
    location: {
      tr: 'İstanbul, Büyükçekmece',
      en: 'Istanbul, Buyukcekmece'
    },
    image: 'https://images.pexels.com/photos/2635011/pexels-photo-2635011.jpeg?auto=compress&cs=tinysrgb&w=800',
    area: '1500 m²',
    status: 'sold',
    type: 'plot',
    description: {
      tr: 'Göl kenarında eşsiz manzaralı arsa. Villa projesi için ideal.',
      en: 'Plot with unique lake view. Ideal for villa project.'
    },
    features: {
      tr: ['Göl manzarası', 'Eşsiz konum', 'Villa projesi', 'Prestijli'],
      en: ['Lake view', 'Unique location', 'Villa project', 'Prestigious']
    },
    plotSize: '1500 m²',
  },
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getPropertiesByType = (type: 'sale' | 'rent' | 'plot'): Property[] => {
  return properties.filter(property => property.type === type);
};

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.status === 'available').slice(0, 6);
};