import Navbar from "../Navbar/Navbar";
import styles from "../Profile/Profile.module.css";

 const Profile = () => {
  return (
    <div className={styles.profileWrapper}>
      <div className="container justify-content-center align-items-center ">
        <div className={`row justify-content-center align-items-center `}>
        <Navbar />
        </div>
        </div>
        </div>
    
  )
}
export default Profile;