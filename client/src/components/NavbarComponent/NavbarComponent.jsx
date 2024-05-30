
import { Navbar, Nav } from 'react-bootstrap';
import styles from "./NavbarComponent.module.css";

 const NavbarComponent = () => {
    
  return (
    <Navbar className={styles.navbarContainer} navbar-dark expand="lg">
      <Navbar.Brand className={styles.navbarBrand} href="/">
        EngiNexus
        
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`${styles.mlAuto} ${styles.navbar} ml-auto`}>
          <Nav.Link className={styles.navLink} href="/about">About</Nav.Link>
          <Nav.Link className={styles.navLink} href="/profile">Profile</Nav.Link>
          <Nav.Link className={styles.navLink} href="/feed">Feed</Nav.Link>
          <Nav.Link className={styles.navLink} href="/contact">Contacts</Nav.Link>
          <Nav.Link className={styles.navLink} href="/logout">Logout</Nav.Link>
          
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
