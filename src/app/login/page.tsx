
import type { Metadata } from 'next';
import Logo from '@/components/common/Logo';
import LoginForm from '@/components/auth/LoginForm';
import Footer from '@/components/layout/Footer';
import InteractiveBackground from '@/components/common/InteractiveBackground'; // Updated import

export const metadata: Metadata = {
  title: 'Login | PTER-VEO3 Access',
  description: 'Acesse a plataforma PTER-VEO3.',
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 sm:p-8 overflow-hidden">
      <InteractiveBackground /> {/* Updated component */}
      
      {/* Subtle orange edge glow */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          boxShadow: '0 0 30px 8px hsla(var(--primary), 0.12), 0 0 50px 15px hsla(var(--primary), 0.08) inset, 0 0 10px 2px hsla(var(--primary), 0.1)' 
        }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-md space-y-10 text-center">
        <Logo className="mb-6" />
        <LoginForm />
      </div>
      
      <Footer className="relative z-10 mt-12 pt-8" />
    </main>
  );
}
