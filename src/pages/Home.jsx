import React from 'react';
import SearchBar from '../components/SearchBar';
import zeviLogo from '../assets/zeviLogo.png';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={`${styles.mainBg}`}>
      <img className={`${styles.zeviLogo}`} src={zeviLogo} alt="zevi-logo" />
      <div className={`${styles.flexPosition}`}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
