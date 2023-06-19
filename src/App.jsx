import React from 'react';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './global.css';
import CarouselCards from './components/HomeCarousel/CarouselCards';
import PlantRegistration from './components/Registration/PlantRegistration';
import Home from './components/HomePage/Home';
import { ClerkProvider, useUser, RedirectToSignIn } from '@clerk/clerk-react';
import { neobrutalism } from '@clerk/themes';

import Details from './components/Details/Details';

const Home = () => {
  return (
    <>
      <h1>Página Inicial</h1>
      <Footer />
    </>
  );
};

const Product = () => {
  return (
    <>
      <h2>Produtos</h2>
      <div>Insira os componentes dos produtos aqui</div>
      <Footer />

function App() {
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
   
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



      <Details />   



    </>
  );
};

const Registration = () => {
  return (
    <>
      <h2>Registro</h2>
      <div>Insira os componentes do registro aqui</div>
    </>
  );

};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
