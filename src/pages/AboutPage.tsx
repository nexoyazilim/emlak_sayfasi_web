import { Users, Award, MapPin, Clock, Home, Heart, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  const stats = [
    { icon: Home, value: '15.000+', label: 'Aktif İlan' },
    { icon: Users, value: '50.000+', label: 'Memnun Müşteri' },
    { icon: MapPin, value: '81', label: 'İl Kapsamı' },
    { icon: Clock, value: '24/7', label: 'Müşteri Desteği' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin ihtiyaçlarını önceleyerek, onların hayallerindeki evi bulmalarına yardımcı oluyoruz.',
    },
    {
      icon: Shield,
      title: 'Güvenilirlik',
      description: 'Şeffaf ve dürüst hizmet anlayışımızla müşterilerimizin güvenini kazanıyoruz.',
    },
    {
      icon: CheckCircle,
      title: 'Profesyonellik',
      description: 'Deneyimli ekibimizle emlak sektöründe en profesyonel hizmeti sunmaya devam ediyoruz.',
    },
  ];

  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Genel Müdür',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: '15 yıllık emlak sektörü deneyimi',
    },
    {
      name: 'Fatma Kaya',
      role: 'Satış Müdürü',
      image: '/public/images/fatma_kaya.png',
      description: 'Müşteri memnuniyeti uzmanı',
    },
    {
      name: 'Mehmet Öz',
      role: 'Emlak Danışmanı',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Lüks emlak projelerinde uzman',
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <stat.icon size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  EmlakPlus, emlak sektöründeki deneyimli kadrosuyla 2010 yılında kuruldu. 
                  Amacımız, gayrimenkul alım-satım ve kiralama süreçlerini müşterilerimiz için 
                  en kolay ve güvenilir hale getirmekti.
                </p>
                <p>
                  Yıllar içinde büyüyen ekibimiz ve gelişen teknolojimizle, Türkiye'nin 
                  dört bir yanında binlerce mutlu müşteriyle buluştuk. Bugün 81 ilde 
                  hizmet veren platformumuzda 15.000'den fazla aktif ilan bulunuyor.
                </p>
                <p>
                  Müşteri memnuniyetini her şeyin üstünde tutan yaklaşımımızla, 
                  sektörde güvenilir bir marka olmayı başardık.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ofisimiz"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Çalışmalarımızda rehber aldığımız temel ilkeler</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <value.icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Ekibimiz</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Deneyimli ve uzman kadromuzla sizlere hizmet veriyoruz</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Misyonumuz</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Türkiye'deki herkesin hayalindeki evi bulmasına yardımcı olmak, 
              emlak sektöründe güven ve şeffaflığı sağlamak. Müşterilerimize 
              en iyi hizmeti sunarak, emlak deneyimlerini kolaylaştırmak.
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Vizyonumuz</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Türkiye'nin en güvenilir ve tercih edilen emlak platformu olmak. 
              Teknoloji ve insan odaklı hizmet anlayışımızla sektöre öncülük etmek 
              ve müşteri memnuniyetinde standart belirlemek.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}