import axios from "axios";
import './index.css'
import React, { useState } from 'react';
import RelevantCard from "./RelevantCard";
import ForumTopicCard from "./ForumTopicCard";

export default function Forum() {

  const [forumData, setForumData] = useState([])
  
  React.useEffect(() => {
    axios.get("http://localhost:8000/forum/forums/general")
      .then(res => setForumData(res.data.topics));
  }, []);

  return (
    <>
      <RelevantCard name={"Teme"}>
        { forumData && forumData.map((value) => (
          <ForumTopicCard dayOfTheWeek={"Utorak"} date={value.date_modified} repliesNumber={"22"} topicText={value.title} username={value.created_by}/>
          ))
        }
      </RelevantCard>
    </>
  );

  // return (
  //     <>
  //   <RelevantCard name={"Popularno"}>
  //       <RelevantCardRow text={"Popularno 1"} link={"nekiUrl"}/>
  //       <RelevantCardRow text={"Popularno 2"} link={"nekiUrl"}/>
  //       <RelevantCardRow text={"Popularno 3fgkjdshgkjfdshgkjhfdkjghkjfdhg"} link={"nekiUrl"}/>
  //       <RelevantCardRow text={"Popularno 3fgkjdshgkjfdshgkjhfdkjghkjfdhg"} link={"nekiUrl"}/>
  //       <RelevantCardRow text={"Popularno 3fgkjdshgkjfdshgkjhfdkjghkjfdhg"} link={"nekiUrl"}/>
  //     </RelevantCard>

  //   <ForumTopicCard dayOfTheWeek={"Utorak"} date={"22/03/2023"} repliesNumber={"22"} topicText={"Topic "} username={"HarunHadzic22"}/>
  //     <ForumTopicCard dayOfTheWeek={"Utorak"} date={"22/03/2023"} repliesNumber={"22"} topicText={"TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST"} username={"HarunHadzic22"}/>

  //         <ForumRepliesCard time={"23:08:22"} date={"13/06/2022"} username={"harun.hadzic"} text={"Primjerak testa"} replyTo={"Tema neka"} replyNumber={"1"}/>

  //         <LogedIn username={"HarunHadzic22"}/>
  //     </>
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

    ); */
}