
"use client"; // Adicionar 'use client' se for usar hooks ou event handlers, mas para debug simples pode não ser necessário

import Footer from '@/components/layout/Footer';
import Logo from '@/components/common/Logo';
// Temporariamente remover LoginForm e InteractiveBackground para isolar o problema
// import LoginForm from '@/components/auth/LoginForm';
// import InteractiveBackground from '@/components/common/InteractiveBackground';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      {/* <InteractiveBackground /> */}
      <div className="relative z-10 flex flex-col items-center space-y-8 w-full max-w-md">
        <Logo className="text-5xl mb-8" />
        <h1 className="text-2xl font-bold text-primary">PÁGINA DE LOGIN (TESTE)</h1>
        <p className="text-center">Se você está vendo isso, a página de login básica está renderizando.</p>
        <p className="text-center text-muted-foreground">Verifique o console do navegador (F12) para erros de JavaScript!</p>
        {/* 
        <Card className="w-full max-w-md bg-card shadow-xl rounded-xl border-border">
          <CardHeader/>
          <CardContent>
            <p>Conteúdo do Card de Login (LoginForm removido para teste)</p>
          </CardContent>
        </Card>
        */}
      </div>
      <Footer className="py-8 absolute bottom-0" />
    </div>
  );
}
