
import styles from "./About.module.css";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <NavbarComponent />
      <div className="container justify-content-center align-items-center ">
        <div className={`row justify-content-center align-items-center `}>
        
    <div className={styles.about}>
      <h1>About Me</h1>
      <p>
        Hi, I&apos;m xxxxxx. I&apos;m a software engineer with a passion for web development and open-source projects. I have experience in building scalable web applications and enjoy working with the latest web technologies.
      </p>
      <img src="https://via.placeholder.com/150" alt="John Doe" className={styles.aboutPhoto}/>
      <h2>Skills</h2>
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
  );
};

export default About;