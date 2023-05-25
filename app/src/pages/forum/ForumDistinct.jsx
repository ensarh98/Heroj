import { useParams } from "react-router-dom";
import ForumCard from "./ForumCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import ForumNavbar from "./ForumNavbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Cookies from "universal-cookie";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function ForumDistinct() {
  const { id } = useParams();

  const [forumData, setFroumData] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}forum/forums/${id}`)
      .then(res => {
        setFroumData(res.data);
      });
  }, [id])

  const [showCreate, setShowCreate] = useState(false);

  const cookies = new Cookies();

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const create = () => {
    axios.post(`${process.env.REACT_APP_API}forum/topic/${id}/create`, {
      title,
      text,
      session_token: cookies.get('session_token'),
    }).then(res => {

      if (res.status === 200) {
        setFroumData({
          ...forumData,
          topics: [
            ...forumData.topics,
            res.data
          ]
        });
      }

      setShowCreate(false);
    })
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ForumNavbar></ForumNavbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="http://localhost:3000/forum">Forum</Breadcrumb.Item>
              <Breadcrumb.Item href={`#`} active>
                {forumData.title ? forumData.title : "Loading..."}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
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
            {showCreate &&
              <Form>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="text">
                  <Form.Label>Post</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={(e) => setText(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={create}>
                  Create
                </Button>
                <Button variant="secondary" onClick={(e) => { e.preventDefault(); setShowCreate(false); }}>
                  Cancel
                </Button>
              </Form>
            }
            {!showCreate &&
              <Button variant='primary' onClick={(e) => { e.preventDefault(); setShowCreate(true); }}>
                Create new topic
              </Button>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}