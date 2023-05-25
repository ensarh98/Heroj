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
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Topic() {
  const { id } = useParams();

  const [topic, setTopic] = useState({});

  const cookies = new Cookies();

  const [forumData, setFroumData] = useState({});

  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_API}forum/topic/${id}`)
    setTopic(res.data);

    axios.get(`${process.env.REACT_APP_API}forum/forums/${res.data.forum_id}`)
      .then(res => {
        setFroumData(res.data);
      });
  }, [id]);

  const [showReply, setShowReply] = useState(false);

  const [text, setText] = useState("");

  const reply = () => {
    axios.post(`${process.env.REACT_APP_API}forum/topic/${id}/reply`, {
      text,
      session_token: cookies.get('session_token'),
    }).then(res => {

      if (res.status === 200) {
        setTopic({
          ...topic,
          posts: [
            ...topic.posts,
            res.data
          ]
        })
      }

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
            <Breadcrumb>
              <Breadcrumb.Item href="../">Forum</Breadcrumb.Item>
              <Breadcrumb.Item href="./">
                {forumData.title ? forumData.title : "Loading..."}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" active>
                {topic.title ? topic.title : "Loading..."}
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <ForumCard title={<h2>{topic ? topic.title : "Loading"}</h2>}>
              {topic.posts ?
                topic.posts.map(post => (
                  <Row className='align-middle'>
                    <Col xs={3}>
                      <img src='../../../images/forum/avatar.png' width={"40%"} />
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