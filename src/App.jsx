import React from "react";
import "./global.css";

import { AllProducts } from "./components/AllProducts/AllProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider, useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { neobrutalism } from "@clerk/themes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CarouselCards from "./components/HomeCarousel/CarouselCards";
import PlantRegistration from "./components/Registration/PlantRegistration";
import HomePage from "./components/HomePage/Home";
import Details from "./components/Details/Details";
import AboutUs from "./components/AboutUs/AboutUs";

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
        <HomePage />
        <CarouselCards />
        <Footer />
      </>
    );
  } else {
    return <RedirectToSignIn />;
  }
}

const Home = () => {
  if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return <AuthWrapper />;
};

const Product = () => {
  return (
    <>
      <Header />
      <AllProducts/>
      <Footer />
    </>
  );
};

const Registration = () => {
  return (
    <>
      <PlantRegistration />
    </>
  );
};

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
};

function App() {
  const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;
  return (
    <div>
      <ClerkProvider
        publishableKey={clerkPubKey}
        appearance={{
          baseTheme: neobrutalism,
          elements: { formButtonPrimary: "bg-green-500 hover:bg-green-600" },
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Product/:id" element={<Product />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about-us" element={<AboutUsPage />} />{" "}
            {/* Nova rota para About Us */}
          </Routes>
        </Router>
      </ClerkProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
