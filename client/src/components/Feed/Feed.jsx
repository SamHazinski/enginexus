import NavbarComponent from "../NavbarComponent/NavbarComponent";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios"; 
import styles from "../Feed/Feed.module.css";

const Feed = () => {
  const [latestGames, setLatestGames] = useState([]);

  const fetchLatestGames = async () => {
    try {
      const response = await axios.get('/api/games/latest');
      setLatestGames(response.data);
    } catch (error) {
      console.error('Error fetching latest games:', error);
    }
  };

  useEffect(() => {
    fetchLatestGames();
  }, []); 

  const handleRefresh = async () => {
    try {
      await axios.post('/api/games/refresh');
      // window.location.reload();
      await fetchLatestGames();
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
  };

  return (
    <div className={styles.feedWrapper}>
      <div className="col-lg-12 col-md-8">
        <div className="container">
          <div className={`${styles.feedRow} row`}>
            <NavbarComponent />
          </div>
          <div className={`row mt-4`}>
            <div className={styles.wrapperProduct}>
              <h1>Games</h1>
              <button onClick={handleRefresh}>Refresh</button>
              <div className={`d-flex flex-wrap justify-content-center`}>
                {latestGames.map((game) => (
                  <ProductCard key={game._id} product={game} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
