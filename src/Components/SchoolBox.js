import React from 'react';
import '../Style/style.css';
import SchoolCSS from '../Style/School.module.css';


function SchoolBox(props) {
  const { title, description, icon} = props;
  
  
  return (
    <div className={SchoolCSS.Box}>
      <div className={SchoolCSS.BoxIcon}>
        <img src={icon} alt='Icon' />
      </div>
      <div className={SchoolCSS.BoxText} >
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default SchoolBox;