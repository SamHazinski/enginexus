
import { Button, Container, Row, Col } from 'react-bootstrap';
import styles from "../ButtonRowComponent/ButtonRowComponent.module.css";

function ButtonRowComponent() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button className={styles.feedBtn} variant="primary">Recent</Button>
        </Col>
        <Col xs="auto">
          <Button className={styles.feedBtn} variant="secondary">Random</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonRowComponent;