import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';

import warningIcon from '../../assets/images/icons/warning.svg';

import styles from './styles.module.css';

const TeacherForm = () => {

  const [scheduleItems, setScheduleItems] = useState([
    { key: 0, week_day: undefined, from: "", to: "" },
  ]);

  const addNewScheduleItem = () => {

    const len = scheduleItems.length;

    setScheduleItems([
      ...scheduleItems,
      {
        key: len ? scheduleItems[len - 1].key + 1 : 0,
        week_day: undefined,
        from: "",
        to: "",
      }
    ]);

  }

  return (
    <div className={styles.page}>
      <PageHeader
        title="Que incrível que você quer ensinar."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia"/>
        </fieldset>
        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
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
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo horário
            </button>
          </legend>

          { scheduleItems.map(item => {
            return (
              <div key={item.week_day} className={styles.scheduleItem}>
                <Select
                  name="week_day"
                  label="Dia da semana"
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
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;