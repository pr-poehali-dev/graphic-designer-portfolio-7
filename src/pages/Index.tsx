import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const services = [
  {
    title: 'Ведение учёта',
    description: 'Полное бухгалтерское сопровождение вашего бизнеса с учётом всех особенностей',
    icon: 'FileText',
    price: 'от 15 000 ₽/мес'
  },
  {
    title: 'Налоговая отчётность',
    description: 'Подготовка и сдача всех видов отчётности в срок, без штрафов',
    icon: 'Calculator',
    price: 'от 5 000 ₽'
  },
  {
    title: 'Консультации',
    description: 'Профессиональные консультации по налогообложению и учёту',
    icon: 'MessageCircle',
    price: 'от 2 000 ₽/час'
  },
  {
    title: 'Кадровый учёт',
    description: 'Ведение кадрового учёта и расчёт заработной платы сотрудников',
    icon: 'Users',
    price: 'от 1 000 ₽/чел'
  },
  {
    title: 'Регистрация бизнеса',
    description: 'Помощь в регистрации ИП и ООО, выбор системы налогообложения',
    icon: 'Building',
    price: 'от 5 000 ₽'
  },
  {
    title: 'Восстановление учёта',
    description: 'Приведение в порядок запущенной бухгалтерии любой сложности',
    icon: 'RefreshCw',
    price: 'от 20 000 ₽'
  }
];

const benefits = [
  {
    icon: 'Shield',
    title: 'Без штрафов',
    description: 'Гарантируем своевременную сдачу отчётности'
  },
  {
    icon: 'Clock',
    title: 'Экономия времени',
    description: 'Вы фокусируетесь на бизнесе, мы — на учёте'
  },
  {
    icon: 'TrendingDown',
    title: 'Оптимизация налогов',
    description: 'Законные способы снижения налоговой нагрузки'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Поддержка 24/7',
    description: 'Всегда на связи для решения ваших вопросов'
  }
];

const steps = [
  {
    number: '01',
    title: 'Заявка',
    description: 'Оставьте заявку на сайте или позвоните нам'
  },
  {
    number: '02',
    title: 'Консультация',
    description: 'Обсудим ваши задачи и подберём оптимальное решение'
  },
  {
    number: '03',
    title: 'Договор',
    description: 'Заключаем договор и передаёте документы'
  },
  {
    number: '04',
    title: 'Работа',
    description: 'Ведём учёт и регулярно отчитываемся о результатах'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Calculator" size={28} className="text-accent" />
            <h1 className="text-xl font-bold">БухПро</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['home', 'services', 'benefits', 'process', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === section ? 'text-accent' : 'text-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'services' && 'Услуги'}
                {section === 'benefits' && 'Преимущества'}
                {section === 'process' && 'Как работаем'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-accent text-white hover:bg-accent/90">
            Получить консультацию
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                Бухгалтерские услуги для малого бизнеса
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Ваша бухгалтерия<br />в надёжных руках
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl font-light leading-relaxed">
                Профессиональное ведение учёта, своевременная отчётность и экономия вашего времени. 
                Работаем с ИП и ООО на всех системах налогообложения.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 px-8"
                >
                  Оставить заявку
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  onClick={() => scrollToSection('services')}
                  size="lg"
                  variant="outline"
                  className="px-8"
                >
                  Наши услуги
                </Button>
              </div>
              <div className="mt-12 flex gap-12">
                <div>
                  <p className="text-3xl font-bold text-accent mb-1">200+</p>
                  <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent mb-1">7 лет</p>
                  <p className="text-sm text-muted-foreground">На рынке</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent mb-1">0</p>
                  <p className="text-sm text-muted-foreground">Штрафов у клиентов</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/1e026b89-cc6b-4c7a-8ea8-d00450a1eab0/files/80232d55-6007-4a76-b4a7-5e86fcca1322.jpg"
                  alt="Accounting services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Полный спектр бухгалтерских услуг с прозрачными ценами
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 border border-gray-200 rounded-xl hover:border-accent hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <Icon name={service.icon as any} size={24} className="text-accent group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-light mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-accent font-semibold text-lg">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground font-light">
              Работаем на результат и репутацию
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name={benefit.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-muted-foreground font-light">
              Простой и понятный процесс сотрудничества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-accent/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground font-light">
              Оставьте заявку и получите бесплатную консультацию
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                  <Input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Иван Иванов"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон *</label>
                  <Input 
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Расскажите о вашем бизнесе и задачах..."
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full bg-accent text-white hover:bg-accent/90 py-6 text-lg">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Phone" size={24} className="mx-auto mb-3 text-accent" />
              <p className="font-semibold mb-1">Телефон</p>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={24} className="mx-auto mb-3 text-accent" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-muted-foreground">info@buhpro.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={24} className="mx-auto mb-3 text-accent" />
              <p className="font-semibold mb-1">Адрес</p>
              <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Calculator" size={24} className="text-accent" />
                <h3 className="text-xl font-bold">БухПро</h3>
              </div>
              <p className="text-gray-400 font-light">
                Профессиональные бухгалтерские услуги для малого бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('benefits')} className="block text-gray-400 hover:text-white transition-colors">
                  Преимущества
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">
                  Контакты
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Phone" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2026 БухПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
