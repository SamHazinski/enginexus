import Navbar from "../Navbar/Navbar";
import styles from "../Feed/Feed.module.css";


 const Feed = () => {
  return (
    <div className={styles.feedWrapper}>
      <div className="container justify-content-center align-items-center ">
        <div className={`row justify-content-center align-items-center `}>
        <Navbar />
        </div>
        </div>
        </div>
  )
}
export default Feed;
