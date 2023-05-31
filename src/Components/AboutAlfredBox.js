import React from 'react';
import '../Style/style.css';
import AboutAlfredCSS from '../Style/AboutAlfred.module.css'

function AboutAlfredBox(props) {
  const { title, description, icon } = props;

  return (
    <div className={AboutAlfredCSS.Box}>
     <div className={AboutAlfredCSS.BoxIcon}>
        <img src={icon} alt='Icon' />
      </div>
    
      <div className={AboutAlfredCSS.BoxText}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
);
}

export default AboutAlfredBox;