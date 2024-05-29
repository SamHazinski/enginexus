
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import styles from "./LoginRegister.module.css";

 const LoginRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegistering ? "register" : "login";
    const payload = isRegistering ? { username, email, password } : { email, password };

    try {
      const response = await fetch(`https://example.com/api/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <div className="container justify-content-center align-items-center ">
        <div className={`row justify-content-center align-items-center `}>
          
    <div className={`${styles.wrapper} ${isRegistering ? styles.active : ""}`}>
      <div className={`${styles.formBox} ${styles.login} ${isRegistering ? styles.hidden : ""}`}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className={styles.icon} />
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className={styles.icon} />
          </div>
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit">Login</button>
          <div className={styles.registerLink}>
            <p>
              Don't have an account? <a href="#" onClick={toggleForm}>Register</a>
            </p>
          </div>
        </form>
      </div>

      <div className={`${styles.formBox} ${styles.register} ${isRegistering ? "" : styles.hidden}`}>
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className={styles.icon} />
          </div>
          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className={styles.icon} />
          </div>
          <div className={styles.rememberForgot}>
            <label>
              <input type="checkbox" />I agree to the terms and conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className={styles.registerLink}>
            <p>
              Already have an account? <a href="#" onClick={toggleForm}>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default LoginRegister;
