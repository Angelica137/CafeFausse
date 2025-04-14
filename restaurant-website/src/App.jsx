import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';


function App() {
  const restaurantName = "Café Fausse";
  
  return (
    <Router>
      <Layout restaurantName={restaurantName}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
