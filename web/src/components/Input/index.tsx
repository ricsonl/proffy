import React, { InputHTMLAttributes } from 'react';

import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
};

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return(
    <div className={styles.inputBlock}>
      <label htmlFor={name}>{label}</label>
      <input defaultValue="" type="text" id={name} {...rest}/>
    </div>
  );
}

export default Input;