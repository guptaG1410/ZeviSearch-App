import React from 'react';
import styles from './searchBar.module.scss';
import searchIcon from '../assets/searchIcon.png';

const SearchBar = ({ setIsTrends}) => {
  return (
    <div>
      <div className={`${styles.search}`}>
        <input
          type="text"
          className={`${styles.searchTerm}`}
          onClick={() => {
            setIsTrends(true);
          }}
          placeholder="Search..."
        />
        <button type="submit" className={`${styles.searchButton}`}>
          <img
            src={searchIcon}
            className={`${styles.searchButtonImg}`}
            alt="search-Icon"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
