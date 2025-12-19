import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

interface OpenCardModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (cardData: { name: string; surname: string; cardType: string }) => void;
}

export default function OpenCardModal({ open, onClose, onSuccess }: OpenCardModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    cardType: 'premium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      onSuccess(formData);
      setStep(3);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setFormData({ name: '', surname: '', cardType: 'premium' });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-lg glass border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Открыть новую карту
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                placeholder="Алексей"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="surname">Фамилия</Label>
              <Input
                id="surname"
                placeholder="Петров"
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full gradient-primary text-white border-0">
              Продолжить
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-4 mt-4">
            <p className="text-center text-muted-foreground mb-6">
              Выберите тип карты
            </p>

            <div className="space-y-3">
              <Card 
                className={`cursor-pointer transition-all ${formData.cardType === 'premium' ? 'border-primary ring-2 ring-primary' : 'border-border hover:border-primary'}`}
                onClick={() => setFormData({ ...formData, cardType: 'premium' })}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">ShoppingCard Premium</h3>
                      <p className="text-sm text-muted-foreground">5% кэшбэк на все покупки</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon name="Crown" size={24} className="text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card 
                className={`cursor-pointer transition-all ${formData.cardType === 'classic' ? 'border-primary ring-2 ring-primary' : 'border-border hover:border-primary'}`}
                onClick={() => setFormData({ ...formData, cardType: 'classic' })}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">ShoppingCard Classic</h3>
                      <p className="text-sm text-muted-foreground">2% кэшбэк на покупки</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                      <Icon name="CreditCard" size={24} className="text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button onClick={() => handleSubmit({ preventDefault: () => {} } as any)} className="w-full gradient-primary text-white border-0">
              Открыть карту
              <Icon name="Sparkles" size={18} className="ml-2" />
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <Icon name="CheckCircle2" size={48} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Карта успешно открыта!</h3>
            <p className="text-muted-foreground mb-6">
              {formData.name} {formData.surname}, ваша {formData.cardType === 'premium' ? 'Premium' : 'Classic'} карта готова к использованию
            </p>
            <div className="p-6 rounded-2xl gradient-primary text-white mb-6">
              <p className="text-sm opacity-80 mb-2">Номер карты</p>
              <p className="text-2xl font-bold mb-4">•••• •••• •••• {Math.floor(1000 + Math.random() * 9000)}</p>
              <div className="flex justify-between">
                <div>
                  <p className="text-xs opacity-80">Владелец</p>
                  <p className="font-semibold">{formData.name} {formData.surname}</p>
                </div>
                <div>
                  <p className="text-xs opacity-80">Баланс</p>
                  <p className="font-semibold">0 ₽</p>
                </div>
              </div>
            </div>
            <Button onClick={resetAndClose} className="w-full bg-white text-purple-600 hover:bg-white/90">
              Отлично!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
