import React from 'react';
import styles from './searchBar.module.scss';
import searchIcon from '../assets/searchIcon.png';

const SearchBar = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          className={`${styles.search}`}
          placeholder="Search..."
        />
        <button type="submit" className={`${styles.searchTerm}`}>
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
