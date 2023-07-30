import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { productDataGenerator } from "../DataGenerator/DataGenerator";
import FilterOperation from "../components/FilterOperation";
import Navbar from "../components/Navbar";

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState("");
  const [searchQ, setSearchQ] = useState("");
  const [filterElement, setFilterElement] = useState(null);

  useEffect(() => {
    setData(productDataGenerator());
  }, []);

  const searchQuery = (q) => {
    setSearchQ(q);
  };

  const getFilters = (filterQueries) => {
    setAppliedFilters(filterQueries);
  };

  const filteredDataFromUtils = (newData) => {
    setFilteredData(newData);
    return newData;
  };

  const getFilterRef = (filterRef) => {
    setFilterElement(filterRef);
  };

  return (
    <div className="App">
      <Navbar
        searchQuery={searchQuery}
        filterElement={filterElement}
      />
      <ProductCard
        data={filteredData}
        getFilters={getFilters}
        getFilterRef={getFilterRef}
      />
      <FilterOperation
        data={data}
        searchQ={searchQ}
        filteredDataFromUtils={filteredDataFromUtils}
        appliedFilters={appliedFilters}
      />
    </div>
  );
};

export default SearchResults;