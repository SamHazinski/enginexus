import NavbarComponent from "../NavbarComponent/NavbarComponent";
import styles from "../Profile/Profile.module.css";
import SavedCard from "../ProductCard/savedCards";
import axios from "axios"; 
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [savedGames, setSavedGames] = useState ([]);

  const fetchSavedGames = async () => {
    try {
      const response = await axios.get('/api/allSaved');
      setSavedGames(response.data);
    } catch (error) {
      console.error('Error fetching saved games:', error);
    }
  };

  useEffect(() => {
    fetchSavedGames()
  }, [])

  return (
    <div className={styles.profileWrapper}>
      <div className="col-lg-12 col-md-8">
        <div className="container">
          <div className={`${styles.feedRow} row`}>
            <NavbarComponent />
          </div>
          <div className={`row mt-4`}>
            <div className={styles.wrapperProduct}>
              <h1>Saved Games</h1>
              <div className={'d-flex flex-wrap justify-content-center'}>
                {savedGames.map((game) => (
                  <SavedCard key={game._id} product={game} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
