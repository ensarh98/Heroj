import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function ForumRegisterSuccess() {
  return(
    <>
      <Container>
        <Row>
          <Col>
            <p>Register successful.</p>
            <p>Check your email to verify your account.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}