import React from 'react';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';

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
