
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
      Hi, we&apos;re a dedicated full stack developer team with a deep passion for exploring, learning, and mastering new technologies through creating applications. Our expertise lies in developing highly scalable web applications, and we all thoroughly enjoy staying at the forefront of the latest web technologies. This application was created using the MERN stack to deepen our knowledge.
      </p>
      <img src="https://via.placeholder.com/150" alt="" className={styles.aboutPhoto}/>
      <h2>Technology Used</h2>
      <ul>
        <li>MongoDB</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>BootStrap</li>
        <li>Framer Motion</li>
        <li>HTML</li>
        <li>Vite</li>
      </ul>
      <h2>Contact</h2>
      <p>
        Feel free to reach out to us at <a href="mailto:enginexus@gmail.com">enginexus@gmail.com</a>
      </p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default About;