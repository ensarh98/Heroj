import { useParams } from "react-router-dom";
import ForumCard from "./ForumCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import ForumNavbar from "./ForumNavbar";

export default function ForumDistinct() {
  const { id } = useParams();

  const [forumData, setFroumData] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}forum/forums/${id}`)
      .then(res => {
        setFroumData(res.data);
      });
  }, [id])

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ForumNavbar></ForumNavbar>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <ForumCard title={<h4>{forumData.title ? forumData.title : "Loading..."}</h4>}>
              {forumData.topics ? forumData.topics.map((topic) => (
                <Row>
                  <Col>
                  <Link to={`/forum/${id}/${topic.id}`}>
                    <h6>{topic.title}</h6>
                  </Link>
                  </Col>
                  <Col className="text-end">
                    <h5>{topic.created_by}</h5>
                    <h6>{topic.date_created}</h6>
                  </Col>
                </Row>
              )) : "Loading..."}
            </ForumCard>
          </Col>
        </Row>
      </Container>
    </>
  );
}