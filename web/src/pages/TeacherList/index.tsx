import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles.module.css';

const TeacherList = () => {
  return (
    <div className={styles.page}>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form>
          <Input name="subject" label="Matéria"/>
          <Input name="week_day" label="Dia da semana"/>
          <Input name="time" label="Hora"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
};

export default TeacherList;