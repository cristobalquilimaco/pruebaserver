import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="servicios" element={<Services />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="casos-exito" element={<div className="py-20"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold mb-4">Casos de Éxito</h1><p className="text-gray-600">Página en construcción</p></div></div>} />
            <Route path="blog" element={<div className="py-20"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold mb-4">Blog</h1><p className="text-gray-600">Página en construcción</p></div></div>} />
            <Route path="sobre-nosotros" element={<div className="py-20"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1><p className="text-gray-600">Página en construcción</p></div></div>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;