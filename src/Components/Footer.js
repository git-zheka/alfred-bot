import React from 'react';
import '../Style/style.css';
import FooterCSS from '../Style/Footer.module.css'
import { Link } from 'react-router-dom';

import instagram from '../Media/ImgFooter/insta.png'
import twitter from '../Media/ImgFooter/twit.png'
import telegram from '../Media/ImgFooter/tg.png'
import facebook from '../Media/ImgFooter/fb.png'

function Footer() {

  return (
    <>
        <section className={FooterCSS.FooterSection}>
            <div className={FooterCSS.LinksBox}>
                <h3>Про нас</h3>
                <ul>
                    <li><Link to="/">Про проект</Link></li>
                    <li><Link to="/">Ваканції</Link></li>
                    <li><Link to="/">Блог</Link></li>
                    <li><Link to="/">Політика конфіденційності</Link></li>
                    <li><Link to="/">Попередження про ризики</Link></li>
                    <li><Link to="/">Користовацька угода</Link></li>
                </ul>
            </div>
            <div className={FooterCSS.LinksBox}>
                <h3>Послуги</h3>
                <ul>
                    <li><Link to="/">Розробка під ключ</Link></li>
                    <li><Link to="/">Купити токен Alfred</Link></li>
                    <li><Link to="/">Мережа Alfred</Link></li>
                </ul>
            </div>
            <div className={FooterCSS.LinksBox}>
                <h3>Продукти</h3>
                <ul>
                    <li><Link to="/">Alfred v1.0</Link></li>
                    <li><Link to="/">Alfred v2.0</Link></li>
                    <li><Link to="/">Лабораторія</Link></li>
                    <li><Link to="/">Школа</Link></li>
                </ul>
            </div>
            <div className={`${FooterCSS.LinksBox} ${FooterCSS.Icons}` }>
                <h3>Спільноти</h3>
                <ul>
                    <li><Link to="/"><img src={instagram} ></img></Link></li>
                    <li><Link to="/"><img src={facebook} ></img></Link></li>
                    <li><Link to="/"><img src={twitter} ></img></Link></li>
                    <li><Link to="/"><img src={telegram} ></img></Link></li>
                </ul>
                <Link className={FooterCSS.Donate} to="/">Підтримати проект</Link>
            </div>
        </section>

        <div className={FooterCSS.Update}>
            <p>Alfred Trade © 2023</p>
        </div>
    </>
  );
}

export default Footer;