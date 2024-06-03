import NavbarComponent from "../NavbarComponent/NavbarComponent";
// import styles from "../Feed/Feed.module.css";
// import ProductCard from "../ProductCard/ProductCard";
import ButtonRowComponent from "../ButtonRowComponent/ButtonRowComponent";
// import React, { useEffect, useState } from "react";
// ;
// import search from "../../utils/allGamesUtil";

// const Feed = () => {

//   const [results, setResults] = useState([]);

//   // Method to get search results and set state
//   const searchGames = async () => {
//     const response  = await search();
//     const data = await response.json();
//     console.log(data);

//     setResults(data);
    
//     // console.log(data.data);

//   };

//   useEffect(() => {
//     searchGames();
//   }, []); // Empty dependency array ensures this effect runs only once after the initial render
  
// return (
//   <div className={styles.feedWrapper}>
//     <div className="col-lg-12 col-md-8">
//       <div className="container">
//         <div className={`${styles.feedRow} row`}>
//           <NavbarComponent />
//         </div>
//         <div className={`row mt-4`}>
//           <ButtonRowComponent />
//           <div className={styles.wrapperProduct}>
//             <h1>Feed List</h1>
//             <div className={styles.feedList}>
//               {results.map((feed) => (
//                 <ProductCard key={feed.id} product={feed} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// };
// export default Feed;


import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import styles from "../Feed/Feed.module.css";

const Feed = () => {
  const [latestGames, setLatestGames] = useState([]);

  useEffect(() => {
    const fetchLatestGames = async () => {
      try {
        const response = await axios.get('/api/games/latest');
        setLatestGames(response.data);
      } catch (error) {
        console.error('Error fetching latest games:', error);
      }
    };

    fetchLatestGames();
  }, []);

  return (
    <div className={styles.feedWrapper}>
      <div className="col-lg-12 col-md-8">
        <div className="container">
          <div className={`${styles.feedRow} row`}>
          <NavbarComponent />
          </div>
          <div className={`row mt-4`}>
          <ButtonRowComponent />
            <div className={styles.wrapperProduct}>
              <h1>Games</h1>
              <div className={styles.feedList}>
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
