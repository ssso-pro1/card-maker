import React from 'react';
import { useRef } from 'react/cjs/react.development';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } = card;

  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = () => {
    deleteCard(card);
  };

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.valud,
    });
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        onChange={onChange}
        className={styles.input}
        type='text'
        name='name'
        value={name}
      />
      <input
        ref={companyRef}
        onChange={onChange}
        className={styles.input}
        type='text'
        name='company'
        value={company}
      />
      <select
        ref={themeRef}
        onChange={onChange}
        className={styles.select}
        name='theme'
        value={theme}
      >
        <option value='dark'>dark</option>
        <option value='light'>light</option>
        <option value='colorful'>colorful</option>
      </select>
      <input
        ref={titleRef}
        onChange={onChange}
        className={styles.input}
        type='text'
        name='title'
        value={title}
      />
      <input
        ref={emailRef}
        onChange={onChange}
        className={styles.input}
        type='text'
        name='email'
        value={email}
      />
      <textarea
        ref={messageRef}
        onChange={onChange}
        className={styles.textarea}
        name='message'
        value={message}
      />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
