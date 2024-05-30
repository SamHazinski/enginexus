
import styles from "./About.module.css";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
            <div className="col-lg-12 col-md-8">
      <div className="container">
        <div className={`${styles.feedRow} row`}>
        <NavbarComponent />
        </div>
        <div className={`row mt-4`}>
        
    <div className={styles.about}>
      <motion.h1 className="aboutHeader"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>About Us</motion.h1>
      <p>
      Hi, we&apos;re a dedicated software engineer with a deep passion for creating innovative web solutions and contributing to open-source projects. Our expertise lies in developing highly scalable web applications, and we all thoroughly enjoy staying at the forefront of the latest web technologies.
      </p>
      <img src="https://via.placeholder.com/150" alt="" className={styles.aboutPhoto}/>
      <h2>Technology Used</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Vite</li>
      </ul>
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me at <a href="mailto:test.dot@example.com">test.dot@example.com</a>
      </p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default About;