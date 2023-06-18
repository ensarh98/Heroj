import axios from "axios";
import './index.css'
import React, { useEffect, useRef, useState } from 'react';
import RelevantCard from "./RelevantCard";
import ForumTopicCard from "./ForumTopicCard";
import Typography1 from "./Typography1";
import ShowSidebar from "../../shared_components/ShowSidebarButton";
import Sidebar from "../../shared_components/Sidebar";
import Button1 from "../../shared_components/Button1";
import Cookies from "universal-cookie";
import LogedIn from "../../shared_components/LogedIn";
import CreateBox from "./CreateBox";
import { useNavigate } from "react-router-dom";

export default function Forum() {
  const weekday = ["Nedjelja","Ponedeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"];

  const [forumData, setForumData] = useState([]);

  const [openCreateBox, setOpenCreateBox] = useState(false);

  const [topicTitle, setTopicTitle] = useState("");
  const [topicText, setTopicText] = useState("");

  const sidebarRef = useRef(null);

  const [username, setUsername] = useState("");

  const createBoxRef = useRef(null);

  const cookies = new Cookies();

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

  const handleClickCreate = () => {
    setOpenCreateBox(true);
  };

  const handleClickCancel = () => {
    setOpenCreateBox(false);
  };

  const navigate = useNavigate();

  const handleClickPost = () => {
    if (cookies.get("session_token")) axios.post(`http://localhost:8000/forum/topic/general/create`, {
      title: topicTitle,
      text: topicText,
      session_token: cookies.get('session_token'),
    }).then((res) => {
      if (!res.data.error) {
        setForumData([
          ...forumData,
          res.data
        ]);
        setOpenCreateBox(false);
        navigate(`/forum/${res.data.id}`);
      } else {
        alert(res.data.error);
      }
    });
  }

  useEffect(() => {
    if (createBoxRef.current) {
      createBoxRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [openCreateBox]);

  React.useEffect(() => {
    axios.get("http://localhost:8000/forum/forums/general")
      .then(res => setForumData(res.data.topics));

    if (cookies.get("session_token")) axios.get(`http://localhost:8000/forum/user/${cookies.get("session_token")}`)
      .then((res) => setUsername(res.data.username));
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
          { !cookies.get("session_token") ?
              <>
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
              </> :
              <>
                <LogedIn username={username} />
              </>
            }
        </div>
      </div>
      <div className="forum-container">
        <RelevantCard name={"Teme"}>
          { forumData && forumData.map((value) => (
            <ForumTopicCard dayOfTheWeek={weekday[new Date(value.date_created).getDay()]} 
              date={value.date_created}
              repliesNumber={value.post_count} 
              topicText={value.title}
              link={`http://localhost:3000/forum/${value.id}`}
              username={value.created_by}
            />
            ))
          }
        </RelevantCard>
        { !openCreateBox && cookies.get("session_token") &&
          <div className="reply-btn-container">
            <Button1
              text={"Create"}
              fontSize={"20px"}
              onClick={handleClickCreate}
            />
          </div>
        }
        { openCreateBox &&
          <CreateBox
            innerRef={createBoxRef}
            handleClickCancel={handleClickCancel}
            handleClickPost={handleClickPost}
            handleTitleChange={setTopicTitle}
            handleTextChange={setTopicText}
          />
        }
      </div>
    </>
  );
}