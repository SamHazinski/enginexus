import React from 'react';
import styles from  './ProductCard.module.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className={`${styles.productCard} col-lg-3`}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button className={styles.productButton}>Add to favorite</button>
      </div>
    </div>
  );
};

export default ProductCard;
