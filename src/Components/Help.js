import '../Style/style.css'
import HelpCSS from '../Style/Help.module.css'

import Box from '../Components/HelpBox'
import Title from '../Components/Title'

import icon1 from '../Media/ImgHelp/faqs.png'
import icon2 from '../Media/ImgHelp/blog.png'




function Help() {

  
  return (
    <>
    <Title title='Потрібна допомога?' />
   <section  className={HelpCSS.Help}>
        <Box
            title='FAQs'
            description='Перегляньте найчастіші запитання для отримання докладних інструкцій з конкретних функцій'
            icon={icon1}
          />
        <Box
            title='Blog'
            description='Будьте в курсі останніх історій та коментарів'
            icon={icon2}
          />
   </section>
   </>
  );
}

export default Help;