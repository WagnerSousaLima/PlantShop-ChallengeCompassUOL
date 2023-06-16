import React from 'react';
import { Header } from './components/Header/Header';
import './global.css';
import { ClerkProvider, useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { neobrutalism } from '@clerk/themes';

function App() {
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;



import React from 'react';
import { Header } from './components/Header/Header';



import './global.css';
import CarouselCards from './components/HomeCarousel/CarouselCards';
import { ClerkProvider } from "@clerk/clerk-react";
import PlantRegistration from './components/Registration/PlantRegistration';
import Home from './components/HomePage/Home';


if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {

  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>

        <Header />

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
        <Header />
        {/* Restante do conteúdo quando o usuário estiver logado */}
      </>
    );
  } else {
    return <RedirectToSignIn />;
  }



      <Home />


      <CarouselCards />







    </>
  )
}

export default App;
