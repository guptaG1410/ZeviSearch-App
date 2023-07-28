import React from "react";
import SearchBar from "../components/SearchBar";
import HomeStyles from "./home.module.scss";
import styles from "./searchResults.module.scss";
import logo from "../assets/zeviLogo.png";
// import FakerDemo from "../components/faker-demo";

const SearchResults = () => {
  return (
    <div className={`${styles.resultPage}`}>
      <div className={`${styles.searchAlign}`}>
        <SearchBar className={`${styles.searchBorder}`} />
      </div>
      <img className={`${HomeStyles.logo}`} src={logo} alt="logo" />
      {/* <FakerDemo /> */}
    </div>
  );
};

export default SearchResults;