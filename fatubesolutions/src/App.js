import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Importar Routes y Route para el enrutamiento
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services'; // Asegúrate de importar el componente Service
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceName" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
