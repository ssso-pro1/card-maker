import React, { useRef } from 'react';
import styles from './image_file_input.module.css';
// import ImageUploader from '../../service/image_uploader';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  //   return <button>Image</button>;
  const inputRef = useRef();

  const onButtonClick = event => {
    // button 클릭 시에 input클릭한 효과 부여 (첨부파일창뜸)
    event.preventDefault();
    inputRef.current.click();
  };

  //사용자가 파일 선택 시, input에 데이터 변경 시 사진 업로드 & url받아옴
  const onChange = async event => {
    console.log(event.target.files[0]);

    // 1. 이렇게 thenthenthen하거나 async로 하거나
    // imageUploader.upload(event.target.files[0]).then(console.log);

    // 2. 콜백자체를 async 붙여서 비동기적으로 가능
    // uploaded는 await이 실행될때까지 기다렸다가 완료되면 uploaded에 할당됨
    // 완료되면 onFileChange라는 prop으로 전달된 이 콜백함수에 '우리 파일 바뀜' 알려줘야해서 정보 더 보내줌
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded); //받아와진 데이터는 콘솔창에서도 잘 나옴 -> original_filename, url

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    //input onChange발생시 우리가 정의한 onChange호출
    // accept: (확장자) image 여야하고 확장자는 상관x
    <div className={styles.container}>
      <input //
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />
      {/* // button : css 를 이용해서 input은 안보이게,
          // Name || Nofile 
          // 버튼 클릭 시 input클릭하는 것과 동일한 효과 */}
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No File'}
      </button>
    </div>
  );
};

export default ImageFileInput;
