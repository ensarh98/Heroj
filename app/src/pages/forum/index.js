import axios from "axios";
import './index.css'
import React, { useRef, useState } from 'react';
import RelevantCard from "./RelevantCard";
import ForumTopicCard from "./ForumTopicCard";
import Typography1 from "./Typography1";
import ShowSidebar from "../../shared_components/ShowSidebarButton";
import Sidebar from "../../shared_components/Sidebar";
import Button1 from "../../shared_components/Button1";

export default function Forum() {
  const weekday = ["Nedjelja","Ponedeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"];

  const [forumData, setForumData] = useState([])
  
  const sidebarRef = useRef(null);

  const openNav = () => {
    sidebarRef.current.style.left = "0";
  };

  const closeNav = () => {
    sidebarRef.current.style.left = "-400px";
  };

  const handleClickSignUp = () => {
    window.location.href = "http://localhost:3000/register/";
  };

  const handleClickLogIn = () => {
    window.location.href = "http://localhost:3000/login/";
  };

  React.useEffect(() => {
    axios.get("http://localhost:8000/forum/forums/general")
      .then(res => setForumData(res.data.topics));
  }, []);

  return (
    <>
      <Sidebar innerRef={sidebarRef} closeNav={closeNav} />
      <div className="row1">
        <div>
          <ShowSidebar onClick={openNav} />
        </div>
        <div className="heading-container">
          <Typography1>
            FORUM
          </Typography1>
        </div>
        <div className="login-container">
          <Button1
            text={"Prijava"}
            fontSize={"25px"}
            onClick={handleClickLogIn}
          />
          <Button1
            text={"Registracija"}
            fontSize={"25px"}
            onClick={handleClickSignUp}
          />
        </div>
      </div>
      <div className="forum-container">
        <RelevantCard name={"Teme"}>
          { forumData && forumData.map((value) => (
            <ForumTopicCard dayOfTheWeek={weekday[new Date(value.date_created).getDay()]} 
              date={value.date_created}
              repliesNumber={"22"} 
              topicText={value.title} 
              username={value.created_by}
            />
            ))
          }
        </RelevantCard>
      </div>
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