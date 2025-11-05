import React from 'react';
import './App.css';
import Header from './components/Header';
import logo from './imagens/logo_grupo_impacta_azul-01.png';

function App() {
  return (
    <div className="App">
      <Header />

      <section className="content">
        <h2>Catálogo de Produtos</h2>
        <div className="product-grid">
          <div className="product">
            <img src={logo} width={200} alt="Produto 1" />
            <p>Produto 1</p>
          </div>
          <div className="product">
            <img src={logo} width={200} alt="Produto 2" />
            <p>Produto 2</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
