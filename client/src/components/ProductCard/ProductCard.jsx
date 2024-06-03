import styles from "./ProductCard.module.css";
import axios from "axios";

const ProductCard = ({ product }) => {
  const handleSave = async () => {
    try {
      await axios.post("/api/saveGame", product);
      alert("Game saved successfully!");
    } catch (error) {
      console.error("Error saving game:", error);
    }
  };
  return (
    <div className={`${styles.productCard} col-lg-3`}>
      <div className={styles.productDetails}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.mobyScore}>Moby Score: {product.moby_score}</p>
        <p className={styles.mobyUrl}>
          <a href={product.moby_url}>Moby URL: {product.moby_url}</a>
        </p>
        <button className={styles.productButton} onClick={handleSave}>
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
