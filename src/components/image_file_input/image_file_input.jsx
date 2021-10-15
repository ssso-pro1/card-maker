import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    // true 일 떄 : loadingspinner
    // false 일 떄 : X
    // 이름(파일)있다면 핑크로 보여줌
    // 없다면 회색

    setLoading(true);
    // console.log(event.target.files[0]);

    const uploaded = await imageUploader.upload(event.target.files[0]);
    // console.log(uploaded);
    setLoading(false);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input //
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />
      {/* loading 아닐 떄만 버튼 보여줌 -> !loading &&*/}
      {!loading && (
        // {false && (
        <button
          // classNames라는 postcss에서 제공하는 라이브러리 사용해서 클래스 이름 만듦
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onButtonClick}
        >
          {name || 'No File'}
        </button>
      )}
      {/* loading이면 보여줌 -> loading && */}
      {/* {loading && <div className={styles.loading}></div>} */}
      {/*  -> css수정할 때 항상보여주기 위해 true로 */}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
