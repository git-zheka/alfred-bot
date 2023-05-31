import React from 'react';
import '../Style/style.css';
import LaboratoryCSS from '../Style/Laboratory.module.css'


function BoxLab(props) {
  const { title, description, icon } = props;

  return (
        <div className={LaboratoryCSS.Box}>
         <div className={LaboratoryCSS.BoxIcon}>
            <img src={icon} alt='Icon' />
          </div>
          <div className={LaboratoryCSS.BoxText}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
  );
}

export default BoxLab;