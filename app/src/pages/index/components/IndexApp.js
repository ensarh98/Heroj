import "../css/IndexApp.css";
import Button1 from "../../../shared_components/Button1";
import LogoComponent from "../../../shared_components/LogoComponent";
import Searchfield1 from "../../../shared_components/Searchfield1";
import Sidebar from "../../../shared_components/Sidebar";
import ShowSidebar from "../../../shared_components/ShowSidebarButton";
import Case from "../../../shared_components/Case";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function IndexApp() {
  const mainRef = useRef(null);
  const sidebarRef = useRef(null);
  const [topCases, setTopCases] = useState([]);
  const [showCases, setShowCases] = useState(true);

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
    axios
      .get("http://localhost:8000/template/top/3/")
      .then((res) => setTopCases(res.data));
  }, []);

  return (
    <div id="main" ref={mainRef}>
      <div id="heading">
        <Sidebar innerRef={sidebarRef} closeNav={closeNav} />
        <div id="heading-left">
          <ShowSidebar onClick={openNav} />
        </div>
        <div id="heading-right">
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
      <div id="content">
        <div id="logo-and-search">
          <LogoComponent />
          <Searchfield1
            placeholder="Unesite simptom"
            setShowCases={setShowCases}
          />
        </div>
        {showCases && (
          <div className="row-cases fade-in">
            {topCases.length !== 0 &&
              topCases.map((value, index) => (
                <Case
                  imagePath={`../../../images/slucaj_${index}.png`}
                  text={value.title}
                  link={`http://localhost:3000/template/${value.id}`}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexApp;
