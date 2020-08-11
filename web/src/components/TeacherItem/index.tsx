import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import styles from './styles.module.css';

const TeacherItem = () => {
  return (
    <article className={styles.teacherItem}>
      <header>
        <img src="https://avatars2.githubusercontent.com/u/54897065?s=460&u=38b229750c4f404bda4643173ffa9545dda13565&v=4" alt="Ricson Vilaça"/>
        <div>
          <strong>Ricson Vilaça</strong>
          <span>ReactJS</span>
        </div>
      </header>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis
      condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et,
      sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;