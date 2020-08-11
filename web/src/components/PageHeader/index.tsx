import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import styles from './styles.module.css';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className={styles.header}>
        <div className={styles.topBarContainer}>
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </div>

        <div className={styles.headerContent}>
          <strong>{props.title}</strong>
          {props.description && <p>{props.description}</p>}
          {props.children}
        </div>
      </header>
  );
}

export default PageHeader;