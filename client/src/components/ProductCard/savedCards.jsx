import styles from  './ProductCard.module.css'; 
import axios from 'axios'

const savedCard = ({ product }) => {
    const handleDelete = async () => {
        try {
          console.log(product.game_id)
          await axios.delete(`/api/deleteGame/${product._id}`);
          alert('Game deleted successfully!');
          window.location.reload();
        } catch (error) {
          console.error('Error deleting game:', error);
        }
      };

  return (
    <div className={`${styles.productCard} col-lg-3`}>
      <div className={styles.productDetails}>
      <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.mobyScore}>Moby Score: {product.moby_score}</p>
        <p className={styles.mobyUrl}><a href={product.moby_url}>Moby URL: {product.moby_url}</a></p>
        <button className={styles.productButton} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default savedCard;
