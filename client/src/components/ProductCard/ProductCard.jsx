
import styles from  './ProductCard.module.css'; 

const ProductCard = ({ product }) => {
  return (
    <div className={`${styles.productCard} col-lg-3`}>
      {/* <img src={product.image} alt={product.name} className={styles.productImage} /> */}
      <div className={styles.productDetails}>
      <h2 className={styles.productTitle}>{product.title}</h2>
        {/* <div className={styles.thumbnailContainer}>
          <img src={product.thumbnail} alt="Thumbnail" className={styles.thumbnailImage} />
        </div> */}
        <p className={styles.mobyScore}>Moby Score: {product.moby_score}</p>
        <p className={styles.mobyUrl}><a href={product.moby_url}>Moby URL: {product.moby_url}</a></p>
        <button className={styles.productButton}>Add to favorites</button>
      </div>
    </div>
  );
};

export default ProductCard;
