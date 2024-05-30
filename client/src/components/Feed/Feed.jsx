import Navbar from "../Navbar/Navbar";
import styles from "../Feed/Feed.module.css";
import ProductCard from '../ProductCard/ProductCard';

const feeds = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a great product.',
    price: 29.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This product is even better!',
    price: 49.99,
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'You will love this product.',
    price: 19.99,
    image: 'https://via.placeholder.com/150'
  }
];

 const Feed = () => {
  return (
    <div className={styles.feedWrapper}>
      <div className="container justify-content-center align-items-center ">
        <div className={`row justify-content-center align-items-center `}>
        <Navbar />
        </div>
        <div className={`row justify-content-center align-items-center `}>
        <div className={styles.wrapperProduct}>
    <h1>Product List</h1>
    <div className={styles.productList}>
      {feeds.map(feed => (
        <ProductCard key={feed.id} product={feed} />
      ))}
    </div>
  </div>
        </div>
        </div>
        </div>
  )
}
export default Feed;
