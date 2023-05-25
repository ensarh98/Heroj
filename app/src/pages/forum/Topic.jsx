import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ForumNavbar from './ForumNavbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ForumCard from './ForumCard';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import Form from 'react-bootstrap/Form';

export default function Topic() {
  const { id } = useParams();

  const [topic, setTopic] = useState({});

  const cookies = new Cookies();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}forum/topic/${id}`)
      .then(res => {
        setTopic(res.data);
      })
  }, [id]);

  const [showReply, setShowReply] = useState(false);

  const [text, setText] = useState("");

  const reply = () => {
    axios.post(`${process.env.REACT_APP_API}forum/topic/${id}/reply`, {
      text,
      session_token: cookies.get('session_token'),
    }).then(res => {
      setShowReply(false);
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
            <ForumCard title={<h2>{topic ? topic.title : "Loading"}</h2>}>
              {topic.posts ?
                topic.posts.map(post => (
                  <Row>
                    <Col>
                      <img src='../public/images/forum/avatar.png' />
                      {post.created_by}
                    </Col>
                    <Col>
                      {post.text}
                    </Col>
                  </Row>
                )) : "Loading"
              }
            </ForumCard>
          </Col>
        </Row>
        <Row>
          <Col>
            {showReply &&
              <Form>
                <Form.Group className="mb-3" controlId="text">
                  <Form.Label>Write your post here</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={(e) => setText(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={reply}>
                  Post
                </Button>
                <Button variant="secondary" onClick={(e) => { e.preventDefault(); setShowReply(false); }}>
                  Cancel
                </Button>
              </Form>
            }
            {!showReply &&
              <Button variant='primary' onClick={(e) => { e.preventDefault(); setShowReply(true); }}>
                Reply to this topic
              </Button>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}