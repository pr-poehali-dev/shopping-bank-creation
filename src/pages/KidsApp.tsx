import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';

const KidsApp = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuth, setShowAuth] = useState(true);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showCardModal, setShowCardModal] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showParentLink, setShowParentLink] = useState(false);
  const [kidName, setKidName] = useState('');
  const [balance, setBalance] = useState(500);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '🎈 Привет! Я твой помощник! Чем могу помочь?' }
  ]);
  const [aiInput, setAiInput] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowAuth(false);
    setKidName('Саша');
  };

  const handleAISend = () => {
    if (!aiInput.trim()) return;
    setMessages(prev => [...prev, { role: 'user', content: aiInput }]);
    
    setTimeout(() => {
      const responses = [
        '🎯 Отличный вопрос! Давай разберемся вместе!',
        '⭐ Копи деньги на своей карте и получай бонусы!',
        '🎨 Ты можешь потратить деньги только с разрешения родителей!',
        '🚀 Классная идея! Давай я помогу тебе!',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 500);
    
    setAiInput('');
  };

  if (showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center p-4">
        <Card className="w-full max-w-md glass border-white/20">
          <CardHeader className="text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Icon name="Baby" size={40} className="text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-white">
              ShoppingBank Kids 🎈
            </CardTitle>
            <p className="text-white/80 mt-2">
              {authMode === 'login' ? 'С возвращением!' : 'Добро пожаловать!'}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              {authMode === 'register' && (
                <div className="space-y-2">
                  <Label className="text-white">Как тебя зовут?</Label>
                  <Input placeholder="Твоё имя" className="bg-white/20 text-white placeholder:text-white/60 border-white/30" />
                </div>
              )}
              <div className="space-y-2">
                <Label className="text-white">Email родителя</Label>
                <Input type="email" placeholder="parent@email.com" className="bg-white/20 text-white placeholder:text-white/60 border-white/30" />
              </div>
              <div className="space-y-2">
                <Label className="text-white">Пароль</Label>
                <Input type="password" placeholder="••••••••" className="bg-white/20 text-white placeholder:text-white/60 border-white/30" />
              </div>
              <Button type="submit" className="w-full bg-white text-purple-600 hover:bg-white/90 font-bold">
                {authMode === 'login' ? '🚀 Войти' : '✨ Зарегистрироваться'}
              </Button>
              <button
                type="button"
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="w-full text-sm text-white hover:underline"
              >
                {authMode === 'login' ? 'Ещё нет аккаунта? Зарегистрируйся!' : 'Уже есть аккаунт? Войди!'}
              </button>
              <div className="pt-4 space-y-2">
                <button className="w-full text-xs text-white/80 hover:text-white">
                  📜 Правила пользования
                </button>
                <button className="w-full text-xs text-white/80 hover:text-white">
                  🔒 Конфиденциальность
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 p-4">
      <header className="container mx-auto mb-6">
        <div className="flex items-center justify-between bg-white/20 backdrop-blur-lg rounded-3xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
              <Icon name="Baby" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Привет, {kidName}! 👋</h1>
              <p className="text-sm text-white/80">Твой баланс: {balance} ₽</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="text-white hover:bg-white/20">
            <Icon name="X" size={24} />
          </Button>
        </div>
      </header>

      <main className="container mx-auto space-y-4 max-w-4xl">
        <Card className="bg-white/90 backdrop-blur-lg border-0">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-yellow-400 to-pink-400 flex items-center justify-center mb-4">
                <Icon name="CreditCard" size={48} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-2">{balance} ₽</h2>
              <p className="text-muted-foreground">Твоя детская карточка</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button onClick={() => setShowCardModal(true)} className="bg-gradient-to-r from-green-400 to-blue-400 text-white border-0">
                <Icon name="Plus" size={20} className="mr-2" />
                Открыть карту
              </Button>
              <Button onClick={() => setShowAI(true)} className="bg-gradient-to-r from-purple-400 to-pink-400 text-white border-0">
                <Icon name="Bot" size={20} className="mr-2" />
                Помощник
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-white/90 backdrop-blur-lg border-0 hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center mx-auto mb-4">
                <Icon name="Coins" size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">💰 Копилка</h3>
              <p className="text-sm text-muted-foreground">Копи деньги на мечту!</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-lg border-0 hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">🎁 Задания</h3>
              <p className="text-sm text-muted-foreground">Выполняй и получай бонусы</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-lg border-0 hover:scale-105 transition-transform cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center mx-auto mb-4">
                <Icon name="GraduationCap" size={32} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">📚 Учись</h3>
              <p className="text-sm text-muted-foreground">Финансовая грамотность</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/90 backdrop-blur-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="History" size={24} />
              Последние покупки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: '🍕 Пицца', amount: '-150 ₽', status: 'Одобрено мамой' },
                { name: '🎮 Игра', amount: '-200 ₽', status: 'Одобрено папой' },
                { name: '🎨 Краски', amount: '-100 ₽', status: 'Одобрено' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/50">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.status}</p>
                  </div>
                  <p className="font-bold">{item.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-400 to-pink-400 border-0 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">👨‍👩‍👧 Родительский контроль</h3>
                <p className="text-white/90 text-sm mb-4">
                  {showParentLink ? '✅ Аккаунт привязан к родителю' : 'Привяжи аккаунт родителя'}
                </p>
                {!showParentLink && (
                  <Button onClick={() => setShowParentLink(true)} className="bg-white text-orange-600 hover:bg-white/90">
                    <Icon name="Link" size={18} className="mr-2" />
                    Привязать
                  </Button>
                )}
              </div>
              <Icon name="Shield" size={60} className="text-white/30" />
            </div>
          </CardContent>
        </Card>
      </main>

      <Dialog open={showCardModal} onOpenChange={setShowCardModal}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">🎉 Открыть карту</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label className="text-white">Как тебя зовут?</Label>
              <Input placeholder="Твоё имя" className="bg-white/20 text-white placeholder:text-white/60 border-white/30" />
            </div>
            <div className="space-y-2">
              <Label className="text-white">Email родителя</Label>
              <Input type="email" placeholder="parent@email.com" className="bg-white/20 text-white placeholder:text-white/60 border-white/30" />
            </div>
            <Button onClick={() => { setBalance(500); setShowCardModal(false); }} className="w-full bg-white text-purple-600 hover:bg-white/90 font-bold">
              🚀 Открыть карту!
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAI} onOpenChange={setShowAI}>
        <DialogContent className="sm:max-w-2xl h-[600px] flex flex-col bg-gradient-to-br from-blue-400 to-purple-400 text-white border-0">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                <Icon name="Bot" size={20} />
              </div>
              <span className="text-xl">🤖 Твой помощник</span>
            </DialogTitle>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4 py-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user' ? 'bg-white text-purple-600' : 'bg-white/20 text-white'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex gap-2 pt-4 border-t border-white/20">
            <Input
              placeholder="Спроси меня..."
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAISend()}
              className="flex-1 bg-white/20 text-white placeholder:text-white/60 border-white/30"
            />
            <Button onClick={handleAISend} size="icon" className="bg-white text-purple-600 hover:bg-white/90">
              <Icon name="Send" size={20} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default KidsApp;
