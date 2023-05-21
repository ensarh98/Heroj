import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';

export default function ForumRegisterId() {
  const { id } = useParams();

  const [success, setSuccess] = useState(false);

  const onSubmit = () => {
    axios.post(`${process.env.REACT_APP_API}forum/register/${id}/`)
      .then((res) => {
        if (res.status === 201) {
          setSuccess(true);
        }
      });
  }

  return (
    <>
      <Container>
        {(success) ? <p>Your account is now verified.</p> :
        <Row>
          <Col>
            <p>Press button below to verify your account:</p>
            <Button variant="primary" type="submit" onClick={onSubmit}>
              Vertify account
            </Button>
          </Col>
        </Row>}
      </Container>
    </>
  )
}