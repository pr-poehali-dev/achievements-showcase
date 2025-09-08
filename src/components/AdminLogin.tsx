import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/context/AuthContext';

const AdminLogin = () => {
  const { isAuthenticated, isOwner, user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const success = await login(email, password);
    
    if (success) {
      setIsOpen(false);
      setEmail('');
      setPassword('');
    } else {
      setError('Неверный email или пароль');
    }
    
    setLoading(false);
  };

  const handleLogout = () => {
    logout();
  };

  if (isAuthenticated && isOwner) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Card className="fox-hole-bg p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-fox-orange flex items-center justify-center">
              <Icon name="User" size={16} className="text-white" />
            </div>
            <div className="text-sm">
              <div className="font-semibold text-fox-earth">{user?.name}</div>
              <div className="text-fox-earth/70">Владелец</div>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="ml-2"
            >
              <Icon name="LogOut" size={16} />
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
            <Icon name="Lock" size={16} className="mr-2" />
            Вход
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="creative-text text-2xl text-fox-earth">
              Вход для владельца
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-fox-earth font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="owner@example.com"
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-fox-earth font-semibold">
                Пароль
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                className="mt-1"
                required
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-fox-orange hover:bg-fox-orange/80"
            >
              {loading ? (
                <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
              ) : (
                <Icon name="LogIn" size={16} className="mr-2" />
              )}
              {loading ? 'Вход...' : 'Войти'}
            </Button>
          </form>
          <div className="text-xs text-fox-earth/60 text-center mt-4">
            Система авторизации в разработке.<br/>
            Демо: owner@example.com / admin123
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminLogin;