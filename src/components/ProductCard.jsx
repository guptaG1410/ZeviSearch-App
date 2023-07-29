import React, { useState } from 'react';
import { productDataGenerator } from '../DataGenerator/DataGenerator';
import Rating from './Rating';
import styles from './productCard.module.scss';

function ProductCard() {
  const [data, setData] = useState(productDataGenerator());
  console.log(data);

  return (
    <div>
      <div className={`${styles.allCards}`}>
        {data.map((d, i) => {
          return (
            <div key={d.id} className={`${styles.mainCard}`}>
              <div className={`${styles.pImage}`}>
                <div className={`${styles.absHeart}`}>
                  <i
                    class="fa-regular fa-heart"
                    style={{ color: '#ffffff' }}
                  ></i>
                </div>
                <img src={d.img} alt="" />
              </div>
              <div className={`${styles.pName}`}>{d.name}</div>
              <div className={`${styles.pPrice}`}>
                <div className={`${styles.pOriginal}`}>${d.originalPrice} </div>
                &nbsp; &nbsp;
                <div className={`${styles.pSelling}`}>${d.sellingPrice}</div>
              </div>
              <div className={`${styles.pRating}`}>
                <div>
                  <Rating value={d.rating} />
                </div>
                <div>({d.reviews})</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
