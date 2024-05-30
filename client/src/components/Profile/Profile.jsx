import Navbar from "../NavbarComponent/NavbarComponent";
import styles from "../Profile/Profile.module.css";
import ProductCard from '../ProductCard/ProductCard';

const products = [
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

 const Profile = () => {
  return (
    <div className={styles.profileWrapper}>
      <Navbar />
      <div className="container justify-content-center align-items-center ">
        <div className={`row justify-content-center align-items-center `}>
        
        <div>
    
    <div className={styles.wrapperProduct}>
    <h1>Product List</h1>
    <div className={styles.productList}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
  </div>
        </div>
        </div>
        </div>
    
  )
}
export default Profile;