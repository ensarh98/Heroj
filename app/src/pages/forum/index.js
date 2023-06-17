import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import './index.css'
import React, { useState } from 'react';
import ForumCard from './ForumCard';
import ForumSideCard from './ForumSideCard';
import ForumNavbar from './ForumNavbar';
import RelevantCard from "./RelevantCard";
import RelevantCardRow from "./RelevantCardRow";
import ForumTopicCard from "./ForumTopicCard";
import ForumRepliesCard from "./ForumRepliesCard";
import LogedIn from "../../shared_components/LogedIn";

export default function Forum() {

  const [forumData, setForumData] = useState([])
  
  React.useEffect(() => {
    axios.get("http://localhost:8000/forum/forums/general")
      .then(res => setForumData(res.data))
  }, [])

  return (
      <>
    <RelevantCard name={"Popularno"}>
        <RelevantCardRow text={"Popularno 1"} link={"nekiUrl"}/>
        <RelevantCardRow text={"Popularno 2"} link={"nekiUrl"}/>
        <RelevantCardRow text={"Popularno 3fgkjdshgkjfdshgkjhfdkjghkjfdhg"} link={"nekiUrl"}/>
        <RelevantCardRow text={"Popularno 3fgkjdshgkjfdshgkjhfdkjghkjfdhg"} link={"nekiUrl"}/>
        <RelevantCardRow text={"Popularno 3fgkjdshgkjfdshgkjhfdkjghkjfdhg"} link={"nekiUrl"}/>
      </RelevantCard>

    <ForumTopicCard dayOfTheWeek={"Utorak"} date={"22/03/2023"} repliesNumber={"22"} topicText={"Topic "} username={"HarunHadzic22"}/>
      <ForumTopicCard dayOfTheWeek={"Utorak"} date={"22/03/2023"} repliesNumber={"22"} topicText={"TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST"} username={"HarunHadzic22"}/>

          <ForumRepliesCard time={"23:08:22"} date={"13/06/2022"} username={"harun.hadzic"} text={"Primjerak testa"} replyTo={"Tema neka"} replyNumber={"1"}/>

          <LogedIn username={"HarunHadzic22"}/>
      </>
    /*
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
            <Breadcrumb.Item href="#" active>Forum</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <ForumCard title={<h4>Forums</h4>}>
            {forums.map((forum) => (
              <Link to={`/forum/${forum.pk}`}>
                {forum.fields.title}
              </Link>
            ))}
          </ForumCard>
          {forums.map((forum) => (
            <ForumCard title={<h4>{forum.fields.title}</h4>}>
              <Link to={`#`}>
                Post 1
              </Link>
              <Link to={`#`}>
                Post 2
              </Link>
              <Link to={`#`}>
                Post 3
              </Link>
              <Link to={`#`}>
                Post 4
              </Link>
            </ForumCard>
          ))}
        </Col>
        <Col>
          <ForumSideCard title={"Recent posts"}>
            <Link to={`#`}>
              Post 1
            </Link>
            <Link to={`#`}>
              Post 2
            </Link>
            <Link to={`#`}>
              Post 3
            </Link>
            <Link to={`#`}>
              Post 4
            </Link>
            <Link to={`#`}>
              Post 4
            </Link>
          </ForumSideCard>
          <ForumSideCard title={"Top posts"}>
            <Link to={`#`}>
              Post 1
            </Link>
            <Link to={`#`}>
              Post 2
            </Link>
            <Link to={`#`}>
              Post 3
            </Link>
            <Link to={`#`}>
              Post 4
            </Link>
            <Link to={`#`}>
              Post 4
            </Link>
          </ForumSideCard>
        </Col>
      </Row>
    </Container>
  </>

     */
  );
}