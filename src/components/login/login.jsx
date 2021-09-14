import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  //로그인하면 메이커화면으로 넘어가는 것 구현
  // 로그인되면 const에 gotomaker maker화면으로 갈 수 있도록
  // 화면에서 다른 라우터로 갈 때는 히스토리 사용
  const history = useHistory();
  const goToMaker = userId => {
    history.push({
      pathname: '/maker',
      state: { id: userId },
    });
  };

  const onLogin = event => {
    authService //
      .login(event.currentTarget.textContent) //
      .then(data => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
