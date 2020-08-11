import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import styles from './TeacherList.module.css';

const TeacherList = () => {
  return (
    <div className={`${styles.page}`}>
      <header>
        <div className={styles.topBarContainer}>
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </div>

        <div className={styles.headerContent}>
          <strong>Estes são os proffys disponíveis.</strong>
        </div>
      </header>
    </div>
  );
};

export default TeacherList;