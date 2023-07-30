import RatingComponent from "./Rating";
import FilterComponent from "./Filter";
// import notFound from "../assets/notFound.jpg";

function ProductCard({ data, getFilters, getFilterRef }) {
  const filteredData = (q) => {
    getFilters(q);
  };

  const handleClickHeart = (e) => {
    const element = e.target;
    if (element.classList.contains("abs-heart-color")) {
      element.classList.remove("abs-heart-color");
    } else {
      element.classList.add("abs-heart-color");
    }
  };

  return (
    <div className="main-page">
      <FilterComponent
        filteredData={filteredData}
        getFilterRef={getFilterRef}
      />
      <div className="all-cards">
        {data.length > 0 &&
          data.map((d, i) => {
            return (
              <div key={d.id} className="main-card">
                <div className="p-image">
                  <div className="parent-hover">
                    <div className="abs-heart">
                      <i
                        className="fa fa-heart"
                        aria-hidden="true"
                        onClick={handleClickHeart}
                      ></i>
                    </div>
                    <div className="hover-bar">View Product</div>
                    <img src={d.img} alt="" />
                  </div>
                </div>
                <div className="p-name">{d.name}</div>
                <div className="p-price">
                  <div className="p-original">${d.originalPrice} </div>
                  &nbsp; &nbsp;
                  <div className="p-selling">${d.sellingPrice}</div>
                </div>
                <div className="p-rating">
                  <div>
                    <RatingComponent value={d.rating} />
                  </div>
                  <div>({d.reviews})</div>
                </div>
              </div>
            );
          })}
        {/* {data.length === 0 && (
          <div className="notFound">
            <img src={notFound} alt="" />
            <div>Found Nothing</div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default ProductCard;