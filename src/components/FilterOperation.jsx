import React, { useEffect, useState } from "react";

function FilterOperations({
  data,
  filteredDataFromUtils,
  appliedFilters,
  searchQ,
}) {
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    const renderedData = tempData.filter((e, i) => {
      return e.name.toLowerCase().includes(searchQ.toLowerCase());
    });
    filteredDataFromUtils(renderedData);
  }, [searchQ]);

  useEffect(() => {
    getFilters();
  }, [appliedFilters]);

  const getFilters = () => {
    if (appliedFilters) {
      const filterQueries = appliedFilters;
      var obj = data;
      var newData = data;
      const renderedBrand = async () => {
        const selectedBrands = Object.keys(filterQueries.brand).filter(
          (brand) => filterQueries.brand[brand]
        );
        if (selectedBrands.length > 0) {
          const filteredData = obj.filter((item) =>
            selectedBrands.includes(item.brand)
          );
          newData = filteredData;
        }
      };

      const renderedPrice = () => {
        const { min, max, under50, over50 } = filterQueries.price;
        const filteredData = newData.filter((item) => {
          if (under50) {
            return item.sellingPrice < 50;
          } else if (over50) {
            return item.sellingPrice >= 50;
          } else {
            return item.sellingPrice >= min && item.sellingPrice <= max;
          }
        });
        newData = filteredData;
      };

      const renderedRating = () => {
        const ratingMap = {
          one: 1,
          two: 2,
          three: 3,
          four: 4,
          five: 5,
        };
        const selectedRatings = Object.keys(filterQueries.rating)
          .filter((rating) => filterQueries.rating[rating])
          .map((rating) => ratingMap[rating]);

        const minV = Math.min(...selectedRatings);
        if (selectedRatings.length > 0) {
          const filteredData = newData.filter((item) => item.rating >= minV);
          newData = filteredData;
        }
      };
      renderedBrand();
      renderedPrice();
      renderedRating();
      setTempData(newData);
      filteredDataFromUtils(newData);
    }
  };
  return <span></span>;
}

export default FilterOperations;