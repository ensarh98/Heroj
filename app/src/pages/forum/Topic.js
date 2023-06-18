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
import ReplyBox from "./ReplyBox";
import Cookies from "universal-cookie";
import LogedIn from "../../shared_components/LogedIn";

export default function Topic() {
  const { id } = useParams();

  const [topicData, setTopicData] = useState({});

  const sidebarRef = useRef(null);

  const [openReplyBox, setOpenReplyBox] = useState(false);

  const replyBoxRef = useRef(null);

  const [replyText, setReplyText] = useState("");

  const [username, setUsername] = useState("");

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

  const handleClickReply = () => {
    setOpenReplyBox(true);
  }

  const handleClickCancel = () => {
    setOpenReplyBox(false);
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/forum/topic/${id}`)
      .then((res) => {
        setTopicData(res.data);
      });

    if (cookies.get("session_token")) axios.get(`http://localhost:8000/forum/user/${cookies.get("session_token")}`)
      .then((res) => setUsername(res.data.username));
  }, []);

  useEffect(() => {
    if (replyBoxRef.current) {
      replyBoxRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [openReplyBox]);

  const handleClickPost = () => {
    axios.post(`http://localhost:8000/forum/topic/${id}/reply`, {
      text: replyText,
      session_token: cookies.get("session_token")
    }).then((res) => {
        if (!res.data.error) {
          setTopicData({
            ...topicData,
            posts: [
              ...topicData.posts,
              res.data,
            ]
          });
          setOpenReplyBox(false);
        } else {
          alert(res.data.error);
        }
      });
  };

  return (
    <div>
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
        { !openReplyBox && cookies.get("session_token") &&
          <div className="reply-btn-container">
            <Button1
              text={"Reply"}
              fontSize={"20px"}
              onClick={handleClickReply}
            />
          </div>
        }
        { openReplyBox &&
          <ReplyBox
            innerRef={replyBoxRef}
            handleClickCancel={handleClickCancel}
            handleClickPost={handleClickPost}
            handleTextChange={setReplyText}
          />
        }
      </div>
    </div>
  );
}