import filterIcon from "../assets/filterIcon.png";
function Navbar({ searchQuery, filterElement }) {
  const handleInputSearch = (e) => {
    searchQuery(e.target.value);
  };

  const handleFilterClick = () => {
    const div = filterElement.current;
    const allCards = document.getElementsByClassName("all-cards")[0];
    allCards.addEventListener("click", function () {
      div.classList.remove("hidden");
      allCards.classList.remove("background-blur");
    });
    if (div.classList.contains("hidden")) {
      allCards.classList.remove("background-blur");
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
      allCards.classList.add("background-blur");
    }
  };
  return (
    <div className="navbar">
      <div className="filter-small-button">
        <button onClick={handleFilterClick}>
          <img src={filterIcon} alt="" />
        </button>
      </div>
      <div className="search-inp">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search"
          onChange={handleInputSearch}
        />
        <button>
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/magnifying-glass-icon.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;