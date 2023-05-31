import '../Style/style.css'


import Box from '../Components/BoxLab'
import Title from '../Components/Title'

import phone from '../Media/ImgLaboratory/iphone.png'
import icon1 from '../Media/ImgLaboratory/stat.png'
import icon2 from '../Media/ImgLaboratory/time.png'
import icon3 from '../Media/ImgLaboratory/market_flow.png'

import LaboratoryCSS from '../Style/Laboratory.module.css'


function Laboratory() {

  
  return (
    <>
    <Title title='Лабораторія' />
   <section  className={LaboratoryCSS.SectionLaboratory}>
        <div className={LaboratoryCSS.sectionLeft}>
          <Box
                  title='Максимізація прибутку: тестуйте стратегію'
                  description='Побудуйте та протестуйте свою стратегію на історичних даних криптовалют, щоб максимізувати свій прибуток та знизити ризики'
                  icon={icon1}
          />

          <Box
                  title='Автоматизований моніторинг: економія часу'
                  description='Наш бот Альфред будет непрерывно мониторить рынок на основе вашей стратегии и предоставит вам точку входа для сделки, позволяя вам сосредоточиться лишь на принятии решений'
                  icon={icon2}
          />

          <Box
                  title="Об'єктивні результати: поінформовані рішення"
                  description="Отримайте об'єктивні статистичні дані пропродуктивності вашої стратегії, щоб приймати поінформовані рішення та покращувати свою торгову ефективність"
                  icon={icon3}
          />
        </div>
        <div className={LaboratoryCSS.sectionRight}>
            <img src={phone} />
        </div>
   </section>
   </>
  );
}

export default Laboratory;