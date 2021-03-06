import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';

import warningIcon from '../../assets/images/icons/warning.svg';

import styles from './styles.module.css';
import api from '../../services/api';

const TeacherForm = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { key: 0, week_day: "", from: "", to: "" },
  ]);

  const addNewScheduleItem = () => {

    const len = scheduleItems.length;

    setScheduleItems([
      ...scheduleItems,
      {
        key: len ? scheduleItems[len - 1].key + 1 : 0,
        week_day: "",
        from: "",
        to: "",
      }
    ]);

  }

  const setScheduleItemValue = (index:number, field:string, value:string) => {
    const updatedScheduleItems = scheduleItems.map((item, i) => {
      if(i === index){
        return { ...item, [field]: value }
      }
      return item;
    });
    setScheduleItems(updatedScheduleItems);
  }

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    });

  }

  return (
    <div className={styles.page}>
      <PageHeader
        title="Que incrível que você quer ensinar."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              required
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
            <Input
              required
              name="avatar"
              label="Avatar" 
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value) }}
            />
            <Input
              required
              name="whatsapp"
              label="Whatsapp" 
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value) }}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input
              required
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => { setCost(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            { scheduleItems.map((item, index) => {
              return (
                <div key={item.key} className={styles.scheduleItem}>
                  <Select
                    required
                    name="week_day"
                    label="Dia da semana"
                    value={item.week_day}
                    onChange={(e) => {setScheduleItemValue(index, 'week_day', e.target.value)}}
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
                  <Input 
                    name="from" 
                    label="Das" 
                    type="time"
                    value={item.from}
                    onChange={(e) => {setScheduleItemValue(index, 'from', e.target.value)}}
                  />
                  <Input 
                    name="to" 
                    label="Até"
                    type="time"
                    value={item.to}
                    onChange={(e) => {setScheduleItemValue(index, 'to', e.target.value)}}
                  />
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
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>

      </main>
    </div>
  );
};

export default TeacherForm;