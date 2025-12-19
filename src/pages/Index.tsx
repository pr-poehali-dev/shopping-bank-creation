import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');

  const cards = [
    {
      name: 'ShoppingCard Premium',
      number: '•••• 4567',
      balance: '125 430 ₽',
      gradient: 'gradient-primary',
      cashback: '5%'
    },
    {
      name: 'ShoppingCard Classic',
      number: '•••• 8901',
      balance: '48 920 ₽',
      gradient: 'gradient-accent',
      cashback: '2%'
    }
  ];

  const transactions = [
    { name: 'Супермаркет', amount: '-1 250 ₽', icon: 'ShoppingCart', time: 'Сегодня, 14:30' },
    { name: 'Перевод от Ивана', amount: '+5 000 ₽', icon: 'ArrowDownLeft', time: 'Вчера, 18:20' },
    { name: 'Кафе', amount: '-850 ₽', icon: 'Coffee', time: 'Вчера, 12:15' },
  ];

  const investments = [
    { name: 'Технологии', amount: '45 000 ₽', profit: '+12.5%', color: 'text-green-400' },
    { name: 'Облигации', amount: '30 000 ₽', profit: '+5.2%', color: 'text-green-400' },
    { name: 'Акции', amount: '25 000 ₽', profit: '-2.1%', color: 'text-red-400' },
  ];

  const handleTransfer = () => {
    if (transferAmount && recipientPhone) {
      alert(`Перевод ${transferAmount} ₽ на номер ${recipientPhone} выполнен успешно!`);
      setTransferAmount('');
      setRecipientPhone('');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Icon name="CreditCard" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gradient">ShoppingBank</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-primary' : ''}>
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('cards')} className={activeTab === 'cards' ? 'text-primary' : ''}>
              <Icon name="CreditCard" size={18} className="mr-2" />
              Карты
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('investments')} className={activeTab === 'investments' ? 'text-primary' : ''}>
              <Icon name="TrendingUp" size={18} className="mr-2" />
              Инвестиции
            </Button>
            <Button variant="ghost" onClick={() => setActiveTab('support')} className={activeTab === 'support' ? 'text-primary' : ''}>
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Поддержка
            </Button>
          </nav>

          <Button variant="ghost" size="icon" onClick={() => setActiveTab('profile')}>
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">АП</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </header>

      <main className="pt-24 pb-8 px-4 container mx-auto">
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl mb-12">
              <div className="absolute inset-0 gradient-primary opacity-90"></div>
              <img 
                src="https://cdn.poehali.dev/projects/88a4e774-a218-4142-bd11-9764aa9dad3b/files/80b52280-c353-4d2f-b66b-d77a07211e40.jpg" 
                alt="Banking Hero"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="relative z-10 text-center py-24 px-4 text-white">
                <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
                  Банк нового поколения
                </h2>
                <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90" style={{ animationDelay: '0.1s' }}>
                  Быстрые переводы, умные инвестиции и кэшбэк за каждую покупку
                </p>
                <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 border-0 font-semibold">
                    <Icon name="Zap" size={20} className="mr-2" />
                    Открыть карту
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Icon name="Play" size={20} className="mr-2" />
                    Как это работает
                  </Button>
                </div>
              </div>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass border-border hover:border-primary transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <CardTitle>Мгновенные переводы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Переводите деньги за секунды без комиссий между картами ShoppingBank</p>
                </CardContent>
              </Card>

              <Card className="glass border-border hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                    <Icon name="Percent" size={24} className="text-white" />
                  </div>
                  <CardTitle>До 5% кэшбэка</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Получайте кэшбэк за каждую покупку и зарабатывайте на своих тратах</p>
                </CardContent>
              </Card>

              <Card className="glass border-border hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <CardTitle>Умные инвестиции</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Инвестируйте свободные средства и получайте доход от вложений</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ArrowRightLeft" size={24} />
                  Быстрый перевод
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Номер телефона получателя</label>
                  <Input 
                    placeholder="+7 (___) ___-__-__" 
                    value={recipientPhone}
                    onChange={(e) => setRecipientPhone(e.target.value)}
                    className="bg-muted/50"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Сумма перевода</label>
                  <Input 
                    placeholder="0 ₽" 
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="bg-muted/50"
                  />
                </div>
                <Button onClick={handleTransfer} className="w-full gradient-primary text-white border-0">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="History" size={24} />
                  Последние операции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <Icon name={tx.icon} size={20} />
                        </div>
                        <div>
                          <p className="font-medium">{tx.name}</p>
                          <p className="text-sm text-muted-foreground">{tx.time}</p>
                        </div>
                      </div>
                      <p className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-400' : ''}`}>
                        {tx.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'cards' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-2">Мои карты</h2>
              <p className="text-muted-foreground">Управляйте своими картами и счетами</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {cards.map((card, i) => (
                <Card key={i} className={`${card.gradient} border-0 text-white overflow-hidden relative animate-scale-in`} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">{card.name}</CardTitle>
                      <Badge className="bg-white/20 text-white border-0">{card.cashback} кэшбэк</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-3xl font-bold">{card.balance}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-white/80 text-lg">{card.number}</p>
                      <Icon name="CreditCard" size={32} className="text-white/60" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PieChart" size={24} />
                  Статистика расходов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Продукты</span>
                    <span className="text-sm font-semibold">15 400 ₽ (35%)</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Развлечения</span>
                    <span className="text-sm font-semibold">8 900 ₽ (20%)</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Транспорт</span>
                    <span className="text-sm font-semibold">6 200 ₽ (14%)</span>
                  </div>
                  <Progress value={14} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'investments' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl font-bold mb-2">Инвестиции</h2>
              <p className="text-muted-foreground">Ваш портфель растет вместе с вами</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass border-border">
                <CardHeader>
                  <CardTitle>Общий баланс</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-2">100 000 ₽</p>
                  <p className="text-green-400 flex items-center gap-1">
                    <Icon name="TrendingUp" size={16} />
                    +15 750 ₽ (18.6%)
                  </p>
                </CardContent>
              </Card>

              <Card className="glass border-border">
                <CardHeader>
                  <CardTitle>Ежемесячный доход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-2">3 245 ₽</p>
                  <p className="text-muted-foreground">В среднем за последние 3 месяца</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle>Мои активы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investments.map((inv, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                          <Icon name="TrendingUp" size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{inv.name}</p>
                          <p className="text-2xl font-bold mt-1">{inv.amount}</p>
                        </div>
                      </div>
                      <p className={`text-xl font-bold ${inv.color}`}>{inv.profit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-border gradient-accent border-0 text-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Начните инвестировать</h3>
                    <p className="text-white/80 mb-4">От 1000 ₽ • Без скрытых комиссий</p>
                    <Button className="bg-white text-purple-600 hover:bg-white/90">
                      Узнать больше
                    </Button>
                  </div>
                  <Icon name="Sparkles" size={80} className="text-white/20" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'support' && (
          <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-2">Поддержка</h2>
              <p className="text-muted-foreground">Мы здесь, чтобы помочь вам 24/7</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="glass border-border hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Онлайн-чат</h3>
                  <p className="text-sm text-muted-foreground">Средний ответ: 2 мин</p>
                </CardContent>
              </Card>

              <Card className="glass border-border hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p className="text-sm text-muted-foreground">8 800 555-35-35</p>
                </CardContent>
              </Card>

              <Card className="glass border-border hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">support@shopbank.ru</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">Как открыть карту?</h4>
                  <p className="text-sm text-muted-foreground">Заполните анкету онлайн, и карта будет доставлена в течение 3 дней</p>
                </div>
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">Как работает кэшбэк?</h4>
                  <p className="text-sm text-muted-foreground">Кэшбэк начисляется автоматически за каждую покупку и доступен сразу</p>
                </div>
                <div className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                  <h4 className="font-semibold mb-2">Есть ли комиссия за переводы?</h4>
                  <p className="text-sm text-muted-foreground">Переводы между картами ShoppingBank всегда бесплатны</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-8 animate-fade-in max-w-2xl mx-auto">
            <div className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarFallback className="bg-primary text-primary-foreground text-3xl">АП</AvatarFallback>
              </Avatar>
              <h2 className="text-3xl font-bold mb-1">Алексей Петров</h2>
              <p className="text-muted-foreground">+7 (900) 123-45-67</p>
            </div>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle>Личная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input value="alexey.petrov@mail.ru" className="bg-muted/50" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Дата рождения</label>
                  <Input value="15.03.1990" className="bg-muted/50" />
                </div>
                <Button className="w-full gradient-primary text-white border-0">
                  Сохранить изменения
                </Button>
              </CardContent>
            </Card>

            <Card className="glass border-border">
              <CardHeader>
                <CardTitle>Настройки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="Bell" size={20} />
                    <span>Уведомления</span>
                  </div>
                  <Icon name="ChevronRight" size={20} />
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={20} />
                    <span>Безопасность</span>
                  </div>
                  <Icon name="ChevronRight" size={20} />
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="HelpCircle" size={20} />
                    <span>Помощь</span>
                  </div>
                  <Icon name="ChevronRight" size={20} />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass border-t border-border py-2">
        <div className="flex justify-around items-center">
          <Button variant="ghost" size="sm" onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-primary' : ''}>
            <Icon name="Home" size={20} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setActiveTab('cards')} className={activeTab === 'cards' ? 'text-primary' : ''}>
            <Icon name="CreditCard" size={20} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setActiveTab('investments')} className={activeTab === 'investments' ? 'text-primary' : ''}>
            <Icon name="TrendingUp" size={20} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setActiveTab('support')} className={activeTab === 'support' ? 'text-primary' : ''}>
            <Icon name="MessageCircle" size={20} />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setActiveTab('profile')} className={activeTab === 'profile' ? 'text-primary' : ''}>
            <Icon name="User" size={20} />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;