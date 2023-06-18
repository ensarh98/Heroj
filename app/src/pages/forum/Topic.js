import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import RelevantCard from "./RelevantCard";
import ForumRepliesCard from "./ForumRepliesCard";
import Sidebar from "../../shared_components/Sidebar";
import ShowSidebar from "../../shared_components/ShowSidebarButton";
import Typography1 from "./Typography1";
import Button1 from "../../shared_components/Button1";
import './index.css'

export default function Topic() {
  const { id } = useParams();

  const [topicData, setTopicData] = useState({});

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

  useEffect(() => {
    axios.get(`http://localhost:8000/forum/topic/${id}`)
      .then((res) => {
        setTopicData(res.data);
      });
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
        { topicData &&
          <RelevantCard name={topicData.title}>
            { topicData.posts && topicData.posts.length > 0 && topicData.posts.map((value, index) => (
                <ForumRepliesCard
                  username={value.created_by}
                  date={value.date_created}
                  text={value.text}
                />
              ))
            }
          </RelevantCard>
        }
      </div>
    </>
  );
}