import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem, { TeacherClassInfo } from '../../components/TeacherItem';

import searchIcon from '../../assets/images/icons/search.svg';

import styles from './styles.module.css';
import api from '../../services/api';

const TeacherList = () => {

  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  };

  const createNewConnection = (id:number) => {
    api.post('connections', {
      user_id: id,
    });
  }

  return (
    <div className={styles.page}>
      <PageHeader title="Estes são os proffys disponíveis.">
        <form onSubmit={searchTeachers}>
          <Select
            required
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Química", label: "Química" },
              { value: "Física", label: "Física" },
              { value: "Matemática", label: "Matemática" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Sociologia", label: "Sociologia" },
              { value: "Portugês", label: "Portugês" },
              { value: "Literatura", label: "Literatura" },
            ]}
          />
          <Select
            required
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <div className={styles.timeAndSearch}>
            <Input
              required
              type="time" 
              name="time" 
              label="Hora"
              value={time}
              onChange={(e) => { setTime(e.target.value) }}
            />
            <button type="submit">
              <img src={searchIcon} alt="Buscar"/>
            </button>
          </div>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map((item:TeacherClassInfo) => {
            return (
              <TeacherItem
                key={item.id}
                item={item}
                createConnection={createNewConnection} />
            );
          })
        }
      </main>
    </div>
  );
};

export default TeacherList;