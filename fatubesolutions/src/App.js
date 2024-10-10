import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
