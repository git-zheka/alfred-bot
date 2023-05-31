import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoMenu from '../Media/ImgMenu/LogoMenu.png';
import LanguagesIconMenu from '../Media/ImgMenu/LanguageLogoMenu.png';
import Presend from "../Media/ImgMenu/SingUpLogoMenu.png"

import '../Style/Menu.css'
import '../Style/style.css'

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="LogoMenu">
        <img src={LogoMenu} alt="Logo" />
      </div>

      <div className='OpenCloseMenu' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <div className={`Menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="MenuOptions">
          <ul>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/">Трейдинг Бот</Link></li>
            <li><Link to="/">Лабораторія</Link></li>
            <li><Link to="/">Школа</Link></li>
            <li><Link to="/">Alfred Token</Link></li>
            <li><Link to="/">Блог</Link></li>
          </ul>
        </div>
        <div className="LoginMenu">
          <ul>
            <li><Link to="/">Увійти</Link></li>
            <li><img src={Presend} alt="SingUp" /><Link to="/">Реєстрація</Link></li>
          </ul>
        </div>
        <div className="LanguagesMenu">
          <ul>
            <li><img src={LanguagesIconMenu} alt="Logo" /></li>
            <li><Link to="/">UA</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;