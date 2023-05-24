import { useParams } from "react-router-dom";
import ForumCard from "./ForumCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function ForumDistinct() {
  const { id } = useParams();

  const [forumData, setFroumData] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}forum/${id}`)
      .then((res => {
        setFroumData(res.data);
        console.log(forumData);
      }));
  }, [id])

  return (
    <>
      <Container>
        <Row>
          <Col>
            {forumData.title}
          </Col>
        </Row>
      </Container>
    </>
  );
}