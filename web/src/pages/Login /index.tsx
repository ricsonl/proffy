import api from '../../services/api';

import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.svg';
import particlesImg from '../../assets/images/success-background.svg';

import styles from './styles.module.css';
import InputPh from '../../components/InputPh';

const Login = () => {
 
  const [ passwordVisib, setPasswordVisib ] = useState(false);

  const togglePasswordVis = () => {
    setPasswordVisib(!passwordVisib);
  };

  return (
    <div className={styles.page}>
      <div className={styles.logoArea}>
        <img src={particlesImg} alt="particles"/> 
        <p>
          <img src={logoImg} alt="logo"/>
          Sua plataforma de estudos online.
        </p>
      </div>
      <form>
        <fieldset className={styles.formArea}>
          <legend>
            <p>Fazer login</p>
            <a href="">Criar uma conta</a>
          </legend>
          <InputPh 
            name="seila"
            icon={false}
            placeholder="E-mail"
          />
          <InputPh 
            name="seila"
            icon={true}
            visible={passwordVisib}
            toggleVis={togglePasswordVis}
            placeholder="Senha"
            type={ !passwordVisib ? "password" : "text" }
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Login;