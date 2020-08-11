import React from 'react';

import PageHeader from '../../components/PageHeader';

import styles from './styles.module.css';

const TeacherList = () => {
  return (
    <div className={styles.page}>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form>
          <div className={styles.inputBlock}>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>
    </div>
  );
};

export default TeacherList;