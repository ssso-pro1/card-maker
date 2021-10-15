import React, { useState, useRef } from 'react';
import styles from './card_add_form.module.css';
import Button from '../button/button';
// import { useRef } from 'react/cjs/react.development';
// import ImageFileInput from '../image_file_input/image_file_input';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  // add는 조금 다르게 버튼 누를 때만 업뎃되니까
  // 파일 바뀌면 단순히 이 컴포넌트 자체에서 state로 갖고 있으면 됨
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = file => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    console.log(card);

    //추가한 뒤 초기화해서 파일명 nofile로 초기화
    formRef.current.reset();

    setFile({
      fileName: null,
      fileURL: null,
    });
    onAdd(card);
  };

  // props 에 card없고, deconstructing 에 card없고
  // placeholder = {name} -> 'Name'
  return (
    <form ref={formRef} className={styles.form}>
      <input //
        ref={nameRef}
        className={styles.input}
        type='text'
        name='company'
        placeholder='name'
      />
      <input
        ref={companyRef}
        className={styles.input}
        type='text'
        name='company'
        placeholder='company'
      />
      <select //
        ref={themeRef}
        className={styles.select}
        name='theme'
        placeholder='theme'
      >
        <option placeholder='dark'>dark</option>
        <option placeholder='light'>light</option>
        <option placeholder='colorful'>colorful</option>
      </select>
      <input //
        ref={titleRef}
        className={styles.input}
        type='text'
        name='title'
        placeholder='title'
      />
      <input //
        ref={emailRef}
        className={styles.input}
        type='text'
        name='email'
        placeholder='email'
      />
      <textarea //
        ref={messageRef}
        className={styles.textarea}
        name='message'
        placeholder='message'
      />
      <div className={styles.fileInput}>
        {/* <ImageFileInput /> */}
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
