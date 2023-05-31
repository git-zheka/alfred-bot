import React from 'react';
import '../Style/style.css';
import HelpCSS from '../Style/Help.module.css'
import { Link } from 'react-router-dom';


function HelpBox(props) {
  const { title, description, icon} = props;

  return (
        <div className={HelpCSS.Box}>
         <div className={HelpCSS.BoxIcon}>
            <img src={icon} alt='Icon' />
          </div>
          <div className={HelpCSS.BoxText}>
            <h4>{title}</h4>
            <p>{description}</p>
            <Link className={HelpCSS.more} to="/">Детальніше</Link>
          </div>
        </div>
  );
}

export default HelpBox;