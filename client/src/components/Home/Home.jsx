import React from "react";
import styles from "./Home.module.css";
import logo from "../../assets/image/logo.png";

 const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.homepage}>
      <div className="container justify-content-center align-items-center ">
        <div className={`row justify-content-center align-items-center `}>
          <div className="col-md-3 col-lg-2">
            <img src={logo} alt="EngiNexus Logo" className={styles.logoImg} />
          </div>
        </div>

        <div
          className={`row justify-content-center align-items-center ${styles.border}`}
        >
          <div className="col-md-8 col-lg-7">
            <h1
              className="text-white text-center mb-4 animate"
              data-toggle="animation"
              data-animation="fadeUp"
              data-animation-order="1"
              data-animation-trigger="load"
            >
              EngiNexus
            </h1>
            <p
              className="text-white text-center mb-5 animate"
              data-toggle="animation"
              data-animation="fadeUp"
              data-animation-order="2"
              data-animation-trigger="load"
            >
              End your choice paralysis and have a small feed of recently
              modified or random games shown for you to pick from.
            </p>
          </div>
        </div>
        <div className="row text-center justify-content-center align-items-center">
          <div className="justify-content-center align-items-center col-md-8 col-lg-7">
            <nav className={styles.navbar}>
              <ul className={styles.menuItems}>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Feed</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
