import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Routes from './Rotas/routes';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer 
        textoFooter = "Desenvolvido por Victor Ramos"   
      />
    </Router>
  );
}