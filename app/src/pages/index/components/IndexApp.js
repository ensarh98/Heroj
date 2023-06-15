import "../css/IndexApp.css";
import Button1 from "../../../shared_components/Button1";
import LogoComponent from "../../../shared_components/LogoComponent";
import Searchfield1 from "../../../shared_components/Searchfield1";
import Sidebar from "../../../shared_components/Sidebar";
import ShowSidebar from "../../../shared_components/ShowSidebarButton";
import Case from "../../../shared_components/Case";
import { useEffect, useRef } from "react";
import data from "./data.json";

function IndexApp() {
  const mainRef = useRef(null);
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
          <Searchfield1 placeholder="Unesite simptom" data={data} />
        </div>
        <div className="row-cases">
          <Case
            imagePath={"../../../images/prvapomoc 1.png"}
            text={"Najpopularniji prvi"}
            link={""}
          />
          <Case
            imagePath={"../../../images/drugapomoc 1.png"}
            text={
              "Najpopularniji prvi sa malo dužim tekstom djgsdgjpsog lksdgj lksjglksdjgkl sdjgl"
            }
            link={""}
          />
          <Case
            imagePath={"../../../images/trecapomoc 1.png"}
            text={"Najpopularniji prvi"}
            link={""}
          />
        </div>
      </div>
    </div>
  );
}

export default IndexApp;
