import NavbarComponent from "../NavbarComponent/NavbarComponent";
import styles from "../Feed/Feed.module.css";
import ProductCard from "../ProductCard/ProductCard";
import ButtonRowComponent from "../ButtonRowComponent/ButtonRowComponent";
import React, { useEffect, useState } from "react";
import axios from "axios";
import search from "../../utils/allGamesUtil";
// import { useState, useEffect } from 'react';

// const feeds = [
//   {
//     id: 1,
//     name: "Product 1",
//     description: "This is a great product.",
//     price: 29.99,
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     description: "This product is even better!",
//     price: 49.99,
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     description: "You will love this product.",
//     price: 19.99,
//     image: "https://via.placeholder.com/150",
//   },
// ];

const Feed = () => {
  //   const [feeds, setFeeds] = useState([
  //     {
  //       game_id: 1,
  //       title: "Mock Title",
  //       moby_url: "https://example.com",
  //       isFavorite: true,
  //       image: "https://via.placeholder.com/150",
  //     },
  //   ]);

  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGiphy = async () => {
    const data  = await search();
    console.log(data);

    setResults(data.data);
    // console.log(data.data);

  };

  searchGiphy();
  //console.log(results);

  return (
    <div className={styles.feedWrapper}>
      <h1>Feed List</h1>
      <div className="col-lg-12 col-md-8">
        <div className={`${styles.feedRow} row`}>
          <NavbarComponent />
        </div>
        {/* {Array.isArray(feeds) &&
          feeds.map((feed) => (
            <div key={feed.game_id}>
              <h2>{feed.title}</h2>
              <p>{feed.moby_url}</p>
              <p>Favorite: ${feed.isFavorite}</p>
              <img src={feed.image} alt={feed.title} />
            </div>
          ))} */}
      </div>
    </div>
  );
};

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
//               {feeds.map((feed) => (
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
export default Feed;

// import NavbarComponent from "../NavbarComponent/NavbarComponent";
// import styles from "../Feed/Feed.module.css";
// import ProductCard from "../ProductCard/ProductCard";
// import ButtonRowComponent from "../ButtonRowComponent/ButtonRowComponent";
// import React, { useEffect, useState } from "react";
// import search from "../../utils/allGamesUtil";

// // import { useState, useEffect } from "react";
// // const feeds = [
// //   {
// //     // id: 1,
// //     name: "Product 1",
// //     description: "This is a great product.",
// //     price: 29.99,
// //     image: "https://via.placeholder.com/150",
// //   },
// //   {
// //     id: 2,
// //     name: "Product 2",
// //     description: "This product is even better!",
// //     price: 49.99,
// //     image: "https://via.placeholder.com/150",
// //   },
// //   {
// //     id: 3,
// //     name: "Product 3",
// //     description: "You will love this product.",
// //     price: 19.99,
// //     image: "https://via.placeholder.com/150",
// //   },
// // ];

// const Feed = () => {
//   // const [feeds, setFeeds] = useState([
//   // ]);
//   const [results, setResults] = useState([]);
//   // Method to get search results and set state
//   const searchGiphy = async () => {
//     const { data } = await search();
//     console.log(data);
//     setResults(data);
//   };
//   // console.log(results);
//   searchGiphy();
 
//   return (
//     <div className={styles.feedWrapper}>
//       <div className="col-lg-12 col-md-8">
//         <div className="container">
//           <div className={`${styles.feedRow} row`}>
//             <NavbarComponent />
//           </div>
//           <div className={`row mt-4`}>
//             <ButtonRowComponent />
//             <div className={styles.wrapperProduct}>
//               <h1>Feed List</h1>
//               <div className={styles.feedList}>
//                 {results.map((feed) => (
//                   <ProductCard key={feed.id} product={feed} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Feed;
