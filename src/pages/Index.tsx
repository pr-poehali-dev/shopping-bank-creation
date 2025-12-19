import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import AuthModal from '@/components/AuthModal';
import OpenCardModal from '@/components/OpenCardModal';
import AIAssistant from '@/components/AIAssistant';

const Index = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [showOpenCard, setShowOpenCard] = useState(false);
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [userData, setUserData] = useState({ name: 'Гость', email: '', phone: '' });
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({ name: '', email: '', phone: '', birthdate: '' });

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

  const handleAuth = (user: { name: string; email: string; phone: string }) => {
    setIsAuthenticated(true);
    setUserData(user);
    setEditData({ name: user.name, email: user.email, phone: user.phone, birthdate: '15.03.1990' });
  };

  const handleSaveProfile = () => {
    setUserData({ name: editData.name, email: editData.email, phone: editData.phone });
    setEditMode(false);
    alert('Профиль успешно обновлен!');
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

          <div className="flex items-center gap-3">
            {!isAuthenticated ? (
              <Button onClick={() => setShowAuth(true)} variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setActiveTab('profile')}>
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {userData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            )}
          </div>
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
                  <Button onClick={() => setShowOpenCard(true)} size="lg" className="bg-white text-purple-600 hover:bg-white/90 border-0 font-semibold">
                    <Icon name="Zap" size={20} className="mr-2" />
                    Открыть карту
                  </Button>
                  <Button onClick={() => setShowHowItWorks(true)} size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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

            <div className="grid md:grid-cols-4 gap-4">
              <Card onClick={() => setShowAI(true)} className="glass border-border hover:border-primary transition-all cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Bot" size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">ИИ-Помощник</h3>
                  <p className="text-sm text-muted-foreground">Мгновенный ответ</p>
                </CardContent>
              </Card>

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
                <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-3xl font-bold mb-1">{userData.name}</h2>
              <p className="text-muted-foreground">{userData.phone || '+7 (900) 123-45-67'}</p>
            </div>

            <Card className="glass border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Личная информация</CardTitle>
                {!editMode && (
                  <Button onClick={() => setEditMode(true)} variant="outline" size="sm">
                    <Icon name="Edit" size={16} className="mr-2" />
                    Редактировать
                  </Button>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Имя и Фамилия</Label>
                  <Input 
                    value={editMode ? editData.name : userData.name} 
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                    disabled={!editMode}
                    className="bg-muted/50" 
                  />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Email</Label>
                  <Input 
                    value={editMode ? editData.email : userData.email || 'user@shopbank.ru'} 
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    disabled={!editMode}
                    className="bg-muted/50" 
                  />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Телефон</Label>
                  <Input 
                    value={editMode ? editData.phone : userData.phone || '+7 (900) 123-45-67'} 
                    onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                    disabled={!editMode}
                    className="bg-muted/50" 
                  />
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Дата рождения</Label>
                  <Input 
                    value={editMode ? editData.birthdate : '15.03.1990'} 
                    onChange={(e) => setEditData({ ...editData, birthdate: e.target.value })}
                    disabled={!editMode}
                    className="bg-muted/50" 
                  />
                </div>
                {editMode && (
                  <div className="flex gap-2">
                    <Button onClick={handleSaveProfile} className="flex-1 gradient-primary text-white border-0">
                      Сохранить изменения
                    </Button>
                    <Button onClick={() => setEditMode(false)} variant="outline" className="flex-1">
                      Отмена
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card onClick={() => navigate('/kids')} className="glass border-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white cursor-pointer hover:scale-105 transition-transform">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">🎈 ShoppingBank Kids</h3>
                    <p className="text-white/90 mb-4">Детское приложение с родительским контролем</p>
                    <Button className="bg-white text-purple-600 hover:bg-white/90">
                      <Icon name="Baby" size={20} className="mr-2" />
                      Открыть
                    </Button>
                  </div>
                  <Icon name="Sparkles" size={80} className="text-white/20" />
                </div>
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
                <div onClick={() => setShowPrivacy(true)} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="FileText" size={20} />
                    <span>Конфиденциальность</span>
                  </div>
                  <Icon name="ChevronRight" size={20} />
                </div>
                <div onClick={() => setShowTerms(true)} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Icon name="ScrollText" size={20} />
                    <span>Правила пользования</span>
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

      <AuthModal open={showAuth} onClose={() => setShowAuth(false)} onAuth={handleAuth} />
      <OpenCardModal open={showOpenCard} onClose={() => setShowOpenCard(false)} onSuccess={() => setShowOpenCard(false)} />
      <AIAssistant open={showAI} onClose={() => setShowAI(false)} />

      <Dialog open={showHowItWorks} onOpenChange={setShowHowItWorks}>
        <DialogContent className="sm:max-w-3xl glass border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Как это работает</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-center text-white">
                <Icon name="Play" size={64} className="mx-auto mb-4" />
                <p className="text-lg">Видео о ShoppingBank</p>
                <p className="text-sm opacity-80 mt-2">Узнайте все возможности за 2 минуты</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Откройте карту за 5 минут</h4>
                  <p className="text-sm text-muted-foreground">Заполните анкету онлайн и получите виртуальную карту мгновенно</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Совершайте покупки и получайте кэшбэк</h4>
                  <p className="text-sm text-muted-foreground">До 5% кэшбэк начисляется автоматически после каждой покупки</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Переводите деньги без комиссий</h4>
                  <p className="text-sm text-muted-foreground">Мгновенные переводы между картами ShoppingBank</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="sm:max-w-2xl glass border-border max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Политика конфиденциальности</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p className="text-muted-foreground">Последнее обновление: 19 декабря 2024</p>
            <div>
              <h4 className="font-semibold mb-2">1. Сбор информации</h4>
              <p className="text-muted-foreground">Мы собираем информацию, которую вы предоставляете при регистрации: имя, email, номер телефона и дату рождения.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Использование данных</h4>
              <p className="text-muted-foreground">Ваши данные используются для предоставления банковских услуг, обработки транзакций и улучшения сервиса.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Защита информации</h4>
              <p className="text-muted-foreground">Мы используем современные методы шифрования и защиты данных. Ваша информация надежно защищена.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Передача третьим лицам</h4>
              <p className="text-muted-foreground">Мы не передаем ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законом.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">5. Ваши права</h4>
              <p className="text-muted-foreground">Вы имеете право на доступ, изменение и удаление своих персональных данных. Свяжитесь с нами для реализации этих прав.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="sm:max-w-2xl glass border-border max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Правила пользования</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p className="text-muted-foreground">Последнее обновление: 19 декабря 2024</p>
            <div>
              <h4 className="font-semibold mb-2">1. Принятие условий</h4>
              <p className="text-muted-foreground">Используя ShoppingBank, вы соглашаетесь с настоящими правилами и обязуетесь их соблюдать.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Регистрация аккаунта</h4>
              <p className="text-muted-foreground">Для открытия карты необходимо предоставить достоверные данные. Вы несете ответственность за сохранность пароля.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Использование карты</h4>
              <p className="text-muted-foreground">Карта предназначена для личного использования. Запрещена передача карты третьим лицам и использование для незаконных операций.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Комиссии и тарифы</h4>
              <p className="text-muted-foreground">Переводы между картами ShoppingBank бесплатны. Другие операции могут облагаться комиссией согласно тарифам.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">5. Безопасность</h4>
              <p className="text-muted-foreground">Немедленно сообщайте нам о любых подозрительных операциях. Мы не несем ответственности за операции, совершенные с вашего согласия.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">6. Детские счета</h4>
              <p className="text-muted-foreground">ShoppingBank Kids доступен для детей от 6 до 18 лет. Требуется привязка к аккаунту родителя и родительский контроль.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;