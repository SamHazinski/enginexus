import NavbarComponent from "../NavbarComponent/NavbarComponent";
import styles from "../Feed/Feed.module.css";
import ProductCard from "../ProductCard/ProductCard";
import ButtonRowComponent from "../ButtonRowComponent/ButtonRowComponent";
import React, { useEffect, useState } from "react";
;
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

  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGames = async () => {
    const response  = await search();
    const data = await response.json();
    console.log(data);

    setResults(data);
    
    // console.log(data.data);

  };

  useEffect(() => {
    searchGames();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render
  
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
            <h1>Feed List</h1>
            <div className={styles.feedList}>
              {results.map((feed) => (
                <ProductCard key={feed.id} product={feed} />
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


