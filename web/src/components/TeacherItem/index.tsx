import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import styles from './styles.module.css';

export interface TeacherClassInfo {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string
};

interface TeacherItemProps{
  item: TeacherClassInfo;
  createConnection: Function;
};

const TeacherItem: React.FC<TeacherItemProps> = ({ item, createConnection}) => {

  return (
    <article className={styles.teacherItem}>
      <header>
        <img src={item.avatar} alt={item.name}/>
        <div>
          <strong>{item.name}</strong>
          <span>{item.subject}</span>
        </div>
      </header>

      <p>{item.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {item.cost}</strong>
        </p>
        <a 
          onClick={() => createConnection(item.user_id)}
          href={`https://wa.me/${item.whatsapp}`}
          target="_blank"
        >
          <img src={wppIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;