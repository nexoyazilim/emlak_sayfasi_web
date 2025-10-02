import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                     <h2 className="text-xl font-bold text-gray-800 mb-6">{t('contact.contactInfo')}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                           <div className="font-semibold text-gray-800 text-lg">{t('contact.address')}</div>
                    <div className="text-gray-600 mt-1">
                      Maslak Mahallesi,<br />
                      Büyükdere Caddesi No: 123<br />
                      34398 Şişli/İstanbul
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                           <div className="font-semibold text-gray-800 text-lg">{t('contact.phoneNumbers')}</div>
                    <div className="text-gray-600 mt-1 space-y-1">
                      <div className="text-lg">
                        <a href="tel:+902125550123" className="hover:text-blue-600 transition-colors font-medium">
                          +90 212 555 0123
                        </a>
                               <span className="text-sm text-gray-500 ml-2">{t('contact.phoneTypes.landline')}</span>
                      </div>
                      <div className="text-lg">
                        <a href="tel:+905355550123" className="hover:text-blue-600 transition-colors font-medium">
                          +90 535 555 0123
                        </a>
                               <span className="text-sm text-gray-500 ml-2">{t('contact.phoneTypes.mobile')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800 text-lg">E-posta Adresleri</div>
                    <div className="text-gray-600 mt-1 space-y-1">
                      <div className="text-lg">
                        <a href="mailto:info@emlakplus.com" className="hover:text-blue-600 transition-colors font-medium">
                          info@emlakplus.com
                        </a>
                        <span className="text-sm text-gray-500 ml-2">(Genel)</span>
                      </div>
                      <div className="text-lg">
                        <a href="mailto:destek@emlakplus.com" className="hover:text-blue-600 transition-colors font-medium">
                          destek@emlakplus.com
                        </a>
                        <span className="text-sm text-gray-500 ml-2">(Destek)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock size={24} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-800 text-lg">Çalışma Saatleri</div>
                    <div className="text-gray-600 mt-1">
                      <div>Pazartesi - Cuma: <span className="font-medium">09:00 - 18:00</span></div>
                      <div>Cumartesi: <span className="font-medium">09:00 - 16:00</span></div>
                      <div>Pazar: <span className="font-medium text-red-600">Kapalı</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Hızlı İletişim</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+902125550123"
                    className="flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg animate-slide-up stagger-1"
                  >
                    <Phone size={20} className="mr-3 animate-bounce-subtle" />
                    Hemen Ara: +90 212 555 0123
                  </a>
                  <a
                    href="https://wa.me/905355550123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg animate-slide-up stagger-2"
                  >
                    WhatsApp: +90 535 555 0123
                  </a>
                  <a
                    href="mailto:info@emlakplus.com"
                    className="flex items-center justify-center w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg animate-slide-up stagger-3"
                  >
                    <Mail size={20} className="mr-3 animate-bounce-subtle" />
                    E-posta Gönder
                  </a>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Sosyal Medya</h3>
                <div className="text-gray-600">
                  <p className="mb-2">Bizi sosyal medyada takip edin:</p>
                  <div className="space-y-2">
                    <div>📘 Facebook: EmlakPlus</div>
                    <div>📷 Instagram: @emlakplus</div>
                    <div>🐦 Twitter: @emlakplus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8542127282546!2d29.02691321547389!3d41.08757797929764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2sMaslak%2C%20B%C3%BCy%C3%BCkdere%20Cd.%20No%3A123%2C%2034398%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1696234567890!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EmlakPlus Ofis Konumu"
              ></iframe>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-2">İlan verme ücreti var mı?</h3>
              <p className="text-gray-600">
                Bireysel müşterilerimiz için temel ilan verme hizmeti ücretsizdir. 
                Premium özellikler için farklı paketlerimiz bulunmaktadır.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Emlak görüntüleme nasıl planlanır?</h3>
              <p className="text-gray-600">
                İlgilendiğiniz ilanın iletişim bilgilerini kullanarak emlak danışmanımızla 
                iletişime geçebilir ve görüntüleme randevusu alabilirsiniz.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Kredi danışmanlığı hizmeti var mı?</h3>
              <p className="text-gray-600">
                Evet, deneyimli ekibimiz kredi süreçlerinde size rehberlik eder ve 
                en uygun finansman seçeneklerini bulmanıza yardımcı olur.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Yasal işlemler nasıl yürütülür?</h3>
              <p className="text-gray-600">
                Tüm yasal işlemler konusunda uzman hukuk ekibimizle çalışıyoruz. 
                Alım-satım süreçlerinde güvenliğinizi sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}