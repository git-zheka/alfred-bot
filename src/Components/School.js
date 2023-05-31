import React from 'react';

import '../Style/style.css';
import SchoolCSS from '../Style/School.module.css';


import Box from '../Components/SchoolBox'
import Title from './Title';

import coins from '../Media/ImgSchool/coins.png'
import gamepad from '../Media/ImgSchool/gamepad.png'
import graduate_cap_school from '../Media/ImgSchool/graduate_cap_school.png'
import handshake from '../Media/ImgSchool/handshake.png'
import hourglass from '../Media/ImgSchool/hourglass.png'
import investment from '../Media/ImgSchool/investment.png'
import trophy from '../Media/ImgSchool/trophy.png'



function School() {

  return (
    <>
        <Title title='Школа' description='Перша школа Трейдінга в якій платять вам – а не ви!'/>
        <section className={SchoolCSS.SectionSchool}>
            <div className={SchoolCSS.SectionLeft}>
            <Box
                title='Заробіток під час навчання'
                description='Отримуйте оплату за кожен пройдений урок'
                icon={coins}
            />
            <Box
                title='Досвідчені трейдери'
                description='Навчайтесь у досвідчених та успішних трейдерів'
                icon={trophy}
            />
            <Box
                title='Гнучкий графік'
                description='Вивчайте матеріали у зручний час'
                icon={hourglass}
            />
            </div>
            <div className={SchoolCSS.SectionCenter}><img src={graduate_cap_school} /></div>
            <div className={SchoolCSS.SectionRight}>
            <Box
                title='Безкоштовне навчання'
                description='Наша школа не вимагає плати за навчання'
                icon={investment}
            />
            <Box
                title='Практичний підхід'
                description='Навчання засноване на практиці та реальних ситуаціях'
                icon={gamepad}
            />
            <Box
                title='Спільнота підтримки'
                description='Приєднуйтесь до активної спільноти трейдерів для обміну досвідом та підтримки'
                icon={handshake}
            />
            </div>
        </section>
        <section className={SchoolCSS.centerbtn}><button className={SchoolCSS.getstart}>Розпочати</button></section>
    </>
  );
}

export default School;