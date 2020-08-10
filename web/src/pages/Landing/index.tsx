import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import styles from './styles.module.css';

const Landing = () => {
    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img 
                    src={landingImg}
                    alt="Plataforma de estudos"
                />
                <div className={styles.buttonsContainer}>
                    <a href="">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>
                    <a href="">
                        <img src={giveClassesIcon} alt="Dar aulas"/>
                        Dar aulas
                    </a>
                </div>

                <span>
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração"/>
                </span>

            </div>
        </div>
    );
};

export default Landing;