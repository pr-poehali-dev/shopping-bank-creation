import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  open: boolean;
  onClose: () => void;
}

export default function AIAssistant({ open, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Привет! Я ваш ИИ-помощник ShoppingBank. Чем могу помочь?' }
  ]);
  const [input, setInput] = useState('');

  const responses: Record<string, string> = {
    'карт': 'У вас есть возможность открыть Premium или Classic карту. Premium дает 5% кэшбэк, Classic - 2%. Хотите открыть карту?',
    'перевод': 'Для перевода используйте форму на главной странице. Укажите номер телефона получателя и сумму. Переводы между картами ShoppingBank бесплатны!',
    'кэшбэк': 'Кэшбэк начисляется автоматически после каждой покупки. Premium карта дает 5%, Classic - 2%. Средства сразу доступны на вашем счете.',
    'инвестиц': 'В разделе "Инвестиции" вы можете вложить деньги в технологии, облигации и акции. Минимальная сумма - 1000 ₽.',
    'поддержк': 'Вы можете связаться с нами через онлайн-чат (2 мин ответа), позвонить 8 800 555-35-35 или написать на support@shopbank.ru',
    'kids': 'ShoppingBank Kids - это детское приложение с родительским контролем. Откройте его через профиль → "ShoppingBank Kids".',
    'default': 'Я могу помочь с открытием карты, переводами, инвестициями, кэшбэком и другими вопросами. О чем хотите узнать подробнее?'
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    const keyword = Object.keys(responses).find(key => input.toLowerCase().includes(key));
    const response = responses[keyword || 'default'];

    setTimeout(() => {
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    }, 500);

    setInput('');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl h-[600px] flex flex-col glass border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Icon name="Bot" size={20} className="text-white" />
            </div>
            <span className="text-xl">ИИ-Помощник</span>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4 py-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === 'user'
                      ? 'gradient-primary text-white'
                      : 'bg-muted'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex gap-2 pt-4 border-t border-border">
          <Input
            placeholder="Задайте вопрос..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon" className="gradient-primary text-white border-0">
            <Icon name="Send" size={20} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
