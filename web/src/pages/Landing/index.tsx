import api from '../../services/api';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import styles from './styles.module.css';

const Landing = () => {

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res => {
      const { total } = res.data;
      setTotalConnections(total);
    })
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
        />
        <div className={styles.buttonsContainer}>
          <Link to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
                  </Link>
          <Link to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
                  </Link>
        </div>

        <span>
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração" />
        </span>

      </div>
    </div>
  );
};

export default Landing;