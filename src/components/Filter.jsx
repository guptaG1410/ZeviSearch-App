import React, { useEffect, useState, useRef } from "react";
import Rating from "./Rating";

function FilterComponent({ filteredData, getFilterRef }) {
  const [open, setOpen] = useState({
    rating: false,
    brand: false,
    price: false,
  });

  const [value, setValue] = useState({
    brand: { mango: false, hm: false, superdry: false },
    price: { under50: false, over50: false, min: 0, max: 100 },
    rating: { one: false, two: false, three: false, four: false, five: false },
  });
  const filterRef = useRef(null);

  useEffect(() => {
    getFilterRef(filterRef);
  }, [filterRef, getFilterRef]);

  const handleFilterClick = (q) => {
    if (q === "b") {
      setOpen({ ...open, brand: !open.brand });
    } else if (q === "p") {
      setOpen({ ...open, price: !open.price });
    } else if (q === "r") {
      setOpen({ ...open, rating: !open.rating });
    }
  };

  useEffect(() => {
    filteredData(value);
  }, [value, filteredData]);

  const handlePriceInputFilter = (e, s) => {
    const targetVal = e.target.value;
    setValue((prevState) => ({
      ...prevState,
      price: {
        ...prevState.price,
        under50: false,
        over50: false,
      },
    }));

    if (targetVal <= 100) {
      if (s === "min") {
        setValue((prevState) => ({
          ...prevState,
          price: {
            ...prevState.price,
            min: Number(targetVal),
          },
        }));
      } else if (s === "max") {
        setValue((prevState) => ({
          ...prevState,
          price: {
            ...prevState.price,
            max: Number(targetVal),
          },
        }));
      }
    }
  };

  const handleRatingFilter = (q) => {
    if (q === "1") {
      setValue((prevState) => ({
        ...prevState,
        rating: {
          ...prevState.rating,
          one: !prevState.rating.one,
        },
      }));
    } else if (q === "2") {
      setValue((prevState) => ({
        ...prevState,
        rating: {
          ...prevState.rating,
          two: !prevState.rating.two,
        },
      }));
    } else if (q === "3") {
      setValue((prevState) => ({
        ...prevState,
        rating: {
          ...prevState.rating,
          three: !prevState.rating.three,
        },
      }));
    } else if (q === "4") {
      setValue((prevState) => ({
        ...prevState,
        rating: {
          ...prevState.rating,
          four: !prevState.rating.four,
        },
      }));
    } else if (q === "5") {
      setValue((prevState) => ({
        ...prevState,
        rating: {
          ...prevState.rating,
          five: !prevState.rating.five,
        },
      }));
    }
  };

  const handleBrandFilter = (q) => {
    if (q === "m") {
      setValue((prevState) => ({
        ...prevState,
        brand: { ...prevState.brand, mango: !prevState.brand.mango },
      }));
    } else if (q === "h") {
      setValue((prevState) => ({
        ...prevState,
        brand: { ...prevState.brand, hm: !prevState.brand.hm },
      }));
    } else if (q === "s") {
      setValue((prevState) => ({
        ...prevState,
        brand: { ...prevState.brand, superdry: !prevState.brand.superdry },
      }));
    }
  };

  const handleInputPriceCheckbox = (q) => {
    if (q === "o") {
      if (value.price.under50 && !value.price.over50) {
        setValue((prevState) => ({
          ...prevState,
          price: {
            ...prevState.price,
            under50: false,
          },
        }));
      }
      setValue((prevState) => ({
        ...prevState,
        price: {
          ...prevState.price,
          over50: !prevState.price.over50,
        },
      }));
    } else if (q === "u") {
      if (value.price.over50 && !value.price.under50) {
        setValue((prevState) => ({
          ...prevState,
          price: {
            ...prevState.price,
            over50: false,
          },
        }));
      }
      setValue((prevState) => ({
        ...prevState,
        price: {
          ...prevState.price,
          under50: !prevState.price.under50,
        },
      }));
    }
  };

  return (
    <div className="filter-main" ref={filterRef}>
      <div className="filter-title"> Filters</div>
      <div className="brand-range">
        <div className="filter-heading" onClick={() => handleFilterClick("b")}>
          <div>Brand</div>
          <div>
            {open.brand ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2985/2985195.png"
                alt="up-arrow"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
                alt="down-arrow"
              />
            )}
          </div>
        </div>
        {open.brand && (
          <div className={`tiles accordion ${open.brand ? "open" : ""}`}>
            <div>
              <input
                type="checkbox"
                id="mango"
                name="mango"
                value="mango"
                checked={value.brand.mango}
                onChange={() => handleBrandFilter("m")}
              />
              <label htmlFor="mango"> Mango</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hm"
                name="hm"
                value="hm"
                checked={value.brand.hm}
                onChange={() => handleBrandFilter("h")}
              />
              <label htmlFor="hm"> H&M</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="superdry"
                name="superdry"
                value="superdry"
                checked={value.brand.superdry}
                onChange={() => handleBrandFilter("s")}
              />
              <label htmlFor="superdry"> Superdry</label>
            </div>
          </div>
        )}
      </div>
      <div className="price-range">
        <div className="filter-heading" onClick={() => handleFilterClick("p")}>
          <div>Price</div>
          <div>
            {open.price ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2985/2985195.png"
                alt="up-arrow"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
                alt="down-arrow"
              />
            )}
          </div>
        </div>
        {open.price && (
          <div
            className={`tiles price-inp accordion ${open.brand ? "open" : ""}`}
          >
            <div>
              <div className="price-over-div">
                $
                <input
                  type="number"
                  name=""
                  id=""
                  onChange={(e) => handlePriceInputFilter(e, "min")}
                  value={Number(value.price.min).toString()}
                  max={100}
                  min={0}
                />
              </div>
              <div className="price-over-div">
                $
                <input
                  type="number"
                  name=""
                  id=""
                  value={Number(value.price.max).toString()}
                  onChange={(e) => handlePriceInputFilter(e, "max")}
                  max={100}
                  min={0}
                />
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                name="under-50"
                id="under-50"
                onChange={() => handleInputPriceCheckbox("u")}
                checked={value.price.under50}
              />
              <label htmlFor="under-50"> Under $50</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="over-50"
                id="over-50"
                checked={value.price.over50}
                onChange={() => handleInputPriceCheckbox("o")}
              />
              <label htmlFor="over-50"> 50$ To 100$ </label>
            </div>
          </div>
        )}
      </div>
      <div className="rating-range">
        <div className="filter-heading" onClick={() => handleFilterClick("r")}>
          <div>Rating</div>
          <div>
            {open.rating ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2985/2985195.png"
                alt="up-arrow"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
                alt="down-arrow"
              />
            )}
          </div>
        </div>
        {open.rating && (
          <div
            className={`tiles price-inp accordion ${open.brand ? "open" : ""}`}
          >
            <div>
              <input
                type="checkbox"
                id="fivestar"
                name="fivestar"
                value="fivestar"
                checked={value.rating.five}
                onChange={() => handleRatingFilter("5")}
              />
              <label htmlFor="fivestar">
                <Rating value={5} />
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="fourstar"
                name="fourstar"
                value="fourstar"
                checked={value.rating.four}
                onChange={() => handleRatingFilter("4")}
              />
              <label htmlFor="fourstar">
                <Rating value={4} text={"& Up"} />
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="threestar"
                name="threestar"
                value="threestar"
                checked={value.rating.three}
                onChange={() => handleRatingFilter("3")}
              />
              <label htmlFor="threestar">
                <Rating value={3} text={"& Up"} />
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="twostar"
                name="twostar"
                value="twostar"
                checked={value.rating.two}
                onChange={() => handleRatingFilter("2")}
              />
              <label htmlFor="twostar">
                <Rating value={2} text={"& Up"} />
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="onestar"
                name="onestar"
                value="onestar"
                onChange={() => handleRatingFilter("1")}
                checked={value.rating.one}
              />
              <label htmlFor="onestar">
                <Rating value={1} text={"& Up"} />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterComponent;