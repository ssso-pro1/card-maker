import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
    //signOut()
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        //사용자가 없다면 처리
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
