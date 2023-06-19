import React from 'react';
import { Header } from './components/Header/Header';

import {AllProducts} from './components/AllProducts/AllProducts'; 
import './global.css';
import { ClerkProvider, useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { neobrutalism } from '@clerk/themes';


function App() {
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

  return (
    <div>
      <ClerkProvider
        publishableKey={clerkPubKey}
        appearance={{
          baseTheme: neobrutalism,
          elements: { formButtonPrimary: 'bg-green-500 hover:bg-green-600' }
        }}
      >
        <AuthWrapper />
      </ClerkProvider>
      {/* Restante do conteúdo do aplicativo */}
    </div>
  );
}

function AuthWrapper() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <>
        {/* Restante do conteúdo quando o usuário estiver logado */}
        <Header />
        <AllProducts /> {/* Corrigido: renderizando o componente AllProducts */}
      </>
    );
  } else {
    return <RedirectToSignIn />;
  }
}

export default App;
