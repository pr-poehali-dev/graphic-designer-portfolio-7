import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

type FilterCategory = 'all' | 'branding' | 'packaging' | 'digital' | 'illustration';

interface PortfolioItem {
  id: number;
  title: string;
  category: FilterCategory;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Modern Brand Identity',
    category: 'branding',
    image: 'https://cdn.poehali.dev/projects/1e026b89-cc6b-4c7a-8ea8-d00450a1eab0/files/fe42f735-4e72-44c2-bf9d-cfe6488a0bff.jpg'
  },
  {
    id: 2,
    title: 'Digital Interface Design',
    category: 'digital',
    image: 'https://cdn.poehali.dev/projects/1e026b89-cc6b-4c7a-8ea8-d00450a1eab0/files/978e3ba6-2b90-4f6d-bbeb-0b8f875feac1.jpg'
  },
  {
    id: 3,
    title: 'Product Packaging',
    category: 'packaging',
    image: 'https://cdn.poehali.dev/projects/1e026b89-cc6b-4c7a-8ea8-d00450a1eab0/files/c032ec8c-61cd-40a9-ad0f-fac836e30a23.jpg'
  },
  {
    id: 4,
    title: 'Corporate Branding',
    category: 'branding',
    image: 'https://cdn.poehali.dev/projects/1e026b89-cc6b-4c7a-8ea8-d00450a1eab0/files/fe42f735-4e72-44c2-bf9d-cfe6488a0bff.jpg'
  },
  {
    id: 5,
    title: 'Web Application UI',
    category: 'digital',
    image: 'https://cdn.poehali.dev/projects/1e026b89-cc6b-4c7a-8ea8-d00450a1eab0/files/978e3ba6-2b90-4f6d-bbeb-0b8f875feac1.jpg'
  },
  {
    id: 6,
    title: 'Luxury Package Design',
    category: 'packaging',
    image: 'https://cdn.poehali.dev/projects/1e026b89-cc6b-4c7a-8ea8-d00450a1eab0/files/c032ec8c-61cd-40a9-ad0f-fac836e30a23.jpg'
  }
];

const services = [
  {
    title: 'Брендинг',
    description: 'Создание уникального визуального стиля и айдентики бренда',
    icon: 'Palette'
  },
  {
    title: 'Упаковка',
    description: 'Разработка дизайна упаковки продуктов и товаров',
    icon: 'Package'
  },
  {
    title: 'Digital-дизайн',
    description: 'Интерфейсы для сайтов, приложений и digital-продуктов',
    icon: 'Monitor'
  },
  {
    title: 'Иллюстрация',
    description: 'Создание уникальных иллюстраций для различных задач',
    icon: 'Pencil'
  }
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [activeSection, setActiveSection] = useState('home');

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">НМ</h1>
          <div className="flex gap-8">
            {['home', 'about', 'services', 'portfolio'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === section ? 'text-accent' : 'text-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'about' && 'Обо мне'}
                {section === 'services' && 'Услуги'}
                {section === 'portfolio' && 'Портфолио'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <p className="text-accent font-medium mb-4 tracking-wider uppercase text-sm">
                Графический дизайнер
              </p>
              <h1 className="text-7xl lg:text-8xl font-bold mb-6 leading-none">
                Наталья<br />Мануйлова
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg font-light">
                Превращаю идеи в визуальные истории. Создаю дизайн, который вдохновляет и запоминается.
              </p>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-black text-white hover:bg-accent transition-colors px-8 py-6 text-base"
              >
                Смотреть работы
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gray-100 rounded-none overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/1e026b89-cc6b-4c7a-8ea8-d00450a1eab0/files/1a97ce59-b79a-4642-b2e6-984ab0ac810f.jpg"
                  alt="Design work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Обо мне</h2>
          <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              Привет! Я Наталья Мануйлова — графический дизайнер, который верит в силу визуальной коммуникации.
            </p>
            <p>
              Моя страсть — создавать дизайн, который не просто красив, но и рассказывает историю бренда. 
              Работаю с каждым проектом индивидуально, погружаясь в суть бизнеса и его аудиторию.
            </p>
            <p>
              Специализируюсь на айдентике, упаковке и digital-дизайне. Помогаю брендам выделиться 
              на рынке через продуманный и искренний визуальный язык.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-bold mb-2">80+</p>
              <p className="text-muted-foreground">Проектов</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">5+</p>
              <p className="text-muted-foreground">Лет опыта</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">100%</p>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Услуги</h2>
          <p className="text-xl text-muted-foreground mb-16 font-light">
            Что я могу сделать для вас
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 border border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6 text-accent">
                  <Icon name={service.icon as any} size={40} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">Портфолио</h2>
          <p className="text-xl text-muted-foreground mb-12 font-light">
            Избранные работы
          </p>
          
          <div className="flex gap-4 mb-16 flex-wrap">
            {[
              { label: 'Все', value: 'all' as FilterCategory },
              { label: 'Брендинг', value: 'branding' as FilterCategory },
              { label: 'Упаковка', value: 'packaging' as FilterCategory },
              { label: 'Digital', value: 'digital' as FilterCategory },
              { label: 'Иллюстрация', value: 'illustration' as FilterCategory }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeFilter === filter.value
                    ? 'bg-black text-white'
                    : 'bg-white text-foreground hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="group cursor-pointer animate-fade-in"
              >
                <div className="aspect-square bg-gray-200 overflow-hidden mb-4">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {item.category === 'branding' && 'Брендинг'}
                  {item.category === 'packaging' && 'Упаковка'}
                  {item.category === 'digital' && 'Digital'}
                  {item.category === 'illustration' && 'Иллюстрация'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Свяжитесь со мной</h3>
              <p className="text-muted-foreground">hello@manuilova.design</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                <Icon name="Linkedin" size={24} />
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-muted-foreground">
            © 2026 Наталья Мануйлова. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;