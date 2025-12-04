
import React from 'react';

export default function Landing() {
  const heroUrl = 'https://images.unsplash.com/photo-1541542684-6f1b3b5f8f3a?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c8b8f3d6a6b9a8e2d3b7f4a6b5c9d1e';

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroUrl})`, filter: 'grayscale(20%) contrast(90%)' }} aria-hidden />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-8 md:px-16 lg:px-32 py-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="inline-block bg-accent-500 text-white text-sm px-4 py-1 rounded-full font-semibold">● Открыто</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-heading text-white tracking-tight mb-4 leading-tight">
            ПИНТА
          </h1>

          <p className="text-lg md:text-xl text-white/85 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Пивной бар с характером. Крафт, музыка и атмосфера настоящего паба.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/menu" className="btn-plain text-base">
              Смотреть меню
            </a>
            <a href="/client" className="btn-outline text-base">
              Забронировать
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[color:var(--color-background)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[color:var(--color-accent-bright)] transition-all group-hover:scale-105 shadow-sm">
                <span className="text-4xl">🍺</span>
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-3">Широкий выбор пива</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Крафтовые сорта, классика и эксклюзивные новинки от лучших пивоварен.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-all group-hover:scale-110 shadow-lg">
                <span className="text-4xl">🎶</span>
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-3">Живые выступления</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Концерты, DJ-сеты и тематические вечера каждую неделю.</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-all group-hover:scale-110 shadow-lg">
                <span className="text-4xl">🍔</span>
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-3">Домашняя кухня</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Сочные бургеры, закуски к пиву и фирменные блюда от шефа.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-20 bg-background">
        <div className="px-8 md:px-16 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block text-[color:var(--color-accent)] font-bold text-sm uppercase tracking-wider mb-4">О нас</span>
              <h2 className="text-3xl md:text-4xl font-black text-[color:var(--color-primary)] mb-4 leading-tight">Место с душой и характером</h2>
              <p className="text-lg text-[color:var(--color-muted)] mb-6 leading-relaxed">
                Уютный интерьер, дерево и кирпич, приглушённый свет. Здесь хочется задержаться на пару часов с друзьями за бокалом отличного пива.
              </p>
              <a href="/menu" className="btn-outline">
                Наше меню
              </a>
            </div>
            
            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-amber-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b1a2b5e4c8f7a9e0b6c1f2d3a4e5f6a" 
                  alt="pub interior" 
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="px-8 md:px-16 lg:px-32">
          <div>
            <div className="text-center mb-12">
              <span className="inline-block text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Афиша</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Ближайшие события</h2>
              <p className="text-xl text-slate-600">Следите за обновлениями — каждую неделю что-то новое!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border-t-4 border-amber-500">
                <div className="text-5xl mb-4">🎸</div>
                <h4 className="font-bold text-2xl text-slate-900 mb-3 group-hover:text-amber-600 transition">Живая музыка</h4>
                <p className="text-slate-600 text-lg mb-4">Локальные исполнители и отличное настроение каждую пятницу.</p>
                <p className="text-amber-600 font-semibold">Начало в 20:00</p>
              </article>
              
              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border-t-4 border-amber-500">
                <div className="text-5xl mb-4">🧠</div>
                <h4 className="font-bold text-2xl text-slate-900 mb-3 group-hover:text-amber-600 transition">Пивной квиз</h4>
                <p className="text-slate-600 text-lg mb-4">Командные викторины с призами и подарками.</p>
                <p className="text-amber-600 font-semibold">Каждую среду</p>
              </article>
              
              <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group border-t-4 border-amber-500">
                <div className="text-5xl mb-4">🍻</div>
                <h4 className="font-bold text-2xl text-slate-900 mb-3 group-hover:text-amber-600 transition">Тематические вечера</h4>
                <p className="text-slate-600 text-lg mb-4">Немецкая кухня и эксклюзивные сорта пива.</p>
                <p className="text-amber-600 font-semibold">Раз в месяц</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-20 bg-primary text-white">
        <div className="px-8 md:px-16 lg:px-32">
          <div>
            <div className="text-center mb-12">
              <span className="inline-block text-amber-400 font-bold text-sm uppercase tracking-wider mb-3">Акции</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Специальные предложения</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all group">
                <div className="text-4xl mb-4">🍺🍺</div>
                <h5 className="font-bold text-xl text-white mb-3">Сет на двоих</h5>
                <p className="text-amber-100 leading-relaxed">Два бокала пива + закуски со скидкой 15%</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all group">
                <div className="text-4xl mb-4">⏰</div>
                <h5 className="font-bold text-xl text-white mb-3">Happy Hours</h5>
                <p className="text-amber-100 leading-relaxed">Скидка 20% в будние с 16:00 до 18:00</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all group">
                <div className="text-4xl mb-4">✨</div>
                <h5 className="font-bold text-xl text-white mb-3">Новинки недели</h5>
                <p className="text-amber-100 leading-relaxed">Каждую неделю — два новых сорта на баре</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/30 hover:border-amber-500 transition-all group">
                <div className="text-4xl mb-4">🎂</div>
                <h5 className="font-bold text-xl text-white mb-3">День рождения</h5>
                <p className="text-amber-100 leading-relaxed">Комплимент от заведения имениннику</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="px-8 md:px-16 lg:px-32">
          <div>
            <div className="text-center mb-12">
              <span className="inline-block text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Отзывы</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Что говорят наши гости</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <blockquote className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all relative">
                <div className="text-amber-500 text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-slate-700 text-lg mb-6 relative z-10 leading-relaxed">Лучшее место в городе для встреч с друзьями — отличное пиво и живая музыка создают неповторимую атмосферу.</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-900">А</div>
                  <cite className="not-italic font-semibold text-slate-900">Алексей</cite>
                </div>
              </blockquote>
              
              <blockquote className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all relative">
                <div className="text-amber-500 text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-slate-700 text-lg mb-6 relative z-10 leading-relaxed">Уютная атмосфера и вкуснейшие бургеры. Возвращаюсь сюда снова и снова, каждый раз открываю для себя новые сорта пива.</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-900">М</div>
                  <cite className="not-italic font-semibold text-slate-900">Мария</cite>
                </div>
              </blockquote>
              
              <blockquote className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all relative">
                <div className="text-amber-500 text-5xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="text-slate-700 text-lg mb-6 relative z-10 leading-relaxed">Приятный персонал, отличный выбор крафтового пива и демократичные цены. Рекомендую всем любителям качественного отдыха!</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-900">И</div>
                  <cite className="not-italic font-semibold text-slate-900">Игорь</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="px-8 md:px-16 lg:px-32">
          <div>
            <div className="text-center mb-12">
              <span className="inline-block text-amber-600 font-bold text-sm uppercase tracking-wider mb-3">Наша атмосфера</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Галерея</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef',
                'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef',
                'https://images.unsplash.com/photo-1526318472351-c75fcf0700b9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef',
                'https://images.unsplash.com/photo-1514432324607-a09d9b4aef50?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef',
              ].map((src, i) => (
                <div key={i} className="relative group overflow-hidden rounded-2xl aspect-square shadow-lg">
                  <img 
                    src={src} 
                    alt={`gallery ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="px-8 md:px-16 lg:px-32">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Ждём вас в гости!</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <div>
                  <div className="text-3xl mb-3">📍</div>
                  <h4 className="font-bold text-lg mb-2">Адрес</h4>
                  <p className="text-amber-100">ул. Примерная, 12</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">🕐</div>
                  <h4 className="font-bold text-lg mb-2">Часы работы</h4>
                  <p className="text-amber-100">Ежедневно 12:00–2:00</p>
                </div>
                <div>
                  <div className="text-3xl mb-3">📞</div>
                  <h4 className="font-bold text-lg mb-2">Телефон</h4>
                  <a href="tel:+70000000000" className="text-amber-100 hover:text-white font-semibold transition">+7 (000) 000-00-00</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="px-8 md:px-16 lg:px-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-black text-amber-500">ПИНТА</div>
            <div className="text-sm text-center md:text-left">
              © 2025 Паб «Пинта». Все права защищены.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition">Instagram</a>
              <a href="#" className="hover:text-amber-500 transition">VK</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
