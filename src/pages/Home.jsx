import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import LatestTrends from '../components/LatestTrends';
import zeviLogo from '../assets/zeviLogo.png';
import styles from './home.module.scss';

const Home = () => {
  const [isTrends, setIsTrends] = useState(false);

  return (
    <div className={`${styles.mainBg}`}>
      <img className={`${styles.zeviLogo}`} src={zeviLogo} alt="zevi-logo" />
      <div
        className={`${styles.flexPosition}`}
        onClick={() => setIsTrends(!isTrends)}
      >
        <SearchBar />
        {isTrends && <LatestTrends setIsTrends={setIsTrends}/>}
      </div>
    </div>
  );
};

export default Home;
