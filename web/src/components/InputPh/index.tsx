import React, { InputHTMLAttributes } from 'react';

import visibleIcon from '../../assets/images/icons/visible.svg';
import invisibleIcon from '../../assets/images/icons/invisible.svg';

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  icon: boolean;
  visible?: boolean;
  toggleVis?: any;
};

const Input: React.FC<InputProps> = ( { icon, visible, toggleVis, name, ...rest }) => {
  return(
    <div className={styles.inputBlock}>
      <input type="text" id={name} {...rest}/>
      {
        icon && <img src={(visible ? visibleIcon : invisibleIcon)} alt="visibility" onClick={toggleVis} />
      }
    </div>
  );
}

export default Input;