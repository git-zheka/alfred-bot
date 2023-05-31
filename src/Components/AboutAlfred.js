

import '../Style/style.css'
import AboutAlfredCSS from '../Style/AboutAlfred.module.css'

import Icon1 from '../Media/ImgAboutAlfred/cpu.png'
import Icon2 from '../Media/ImgAboutAlfred/crown.png'
import Icon3 from '../Media/ImgAboutAlfred/server_cloud.png'
import Neural from '../Media/ImgAboutAlfred/neural.png'

import Box from '../Components/AboutAlfredBox'
import Title from '../Components/Title'

function AboutAlfred() {

  return (
    <>
    <Title title='Торговий робот - Alfred Trade' description='Унікальні торговельні рішення силою штучного інтелекту!'/>
   <section  className={AboutAlfredCSS.SectionAbout}>
        <div className={AboutAlfredCSS.sectionLeft}>
            <img src={Neural} />
        </div>

        <div className={AboutAlfredCSS.sectionRight}>
            <Box
                title='Швидкодія'
                description='ШІ-трейдер здатний аналізувати та обробляти величезні обсяги даних у реальному часі, що дозволяє приймати рішення швидше, ніж людині'
                icon={Icon1}
            />
            <Box
                title='Беземоційність'
                description="ШІ-трейдер не схильний до емоційних факторів, таких як страх чи жадібність, що дозволяє йому приймати об'єктивні та раціональні рішення на основі даних"
                icon={Icon2}
            />
            <Box
                title='Автоматизація'
                description='ШІ-трейдер здатний аналізувати та обробляти величезні обсяги даних у реальному часі, що дозволяє приймати рішення швидше, ніж людині'
                icon={Icon3}
            />
        </div>
   </section>
   <section className={AboutAlfredCSS.centerbtn}><button className={AboutAlfredCSS.getstart}>Розпочати</button></section>
   </>
  );
}

export default AboutAlfred;