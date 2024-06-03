
import styles from  './ProductCard.module.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className={`${styles.productCard} col-lg-3`}>
      {/* <img src={product.image} alt={product.name} className={styles.productImage} /> */}
      <div className={styles.productDetails}>
        <h2>{product.title}</h2>
        <p>Moby Score:</p>
        <p>{product.moby_url}</p>
        <button className={styles.productButton}>Add to favorite</button>
      </div>
    </div>
  );
};

export default ProductCard;
