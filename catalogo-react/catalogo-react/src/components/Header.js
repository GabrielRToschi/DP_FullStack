import React from 'react';
import logo from '../imagens/logo_grupo_impacta_azul-01.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} width={250} alt="Logo Impacta" />
        <p>Faculdade Impacta</p>
      </div>
    </header>
  );
}

export default Header;
