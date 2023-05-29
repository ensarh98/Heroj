import "../css/IndexApp.css";
import Button1 from "../../../shared_components/Button1";
import LogoComponent from "../../../shared_components/LogoComponent";
import SearchField1 from "../../../shared_components/Searchfield1";
import Sidebar from "../../../shared_components/Sidebar";
import ShowSidebar from "../../../shared_components/ShowSidebarButton";
import { useEffect, useRef } from "react";

function IndexApp() {

  const mainRef = useRef(null);
  const sidebarRef = useRef(null);

  const openNav = () => {
    sidebarRef.current.style.left = "0";
  }

  const closeNav = () => {
    sidebarRef.current.style.left = "-400px";
  }

  return (
    <div id="main" ref={mainRef}>
      <div id="heading">
        <Sidebar innerRef={sidebarRef} closeNav={closeNav} />
        <div id="heading-left">
          <ShowSidebar onClick={openNav} />
        </div>
        <div id="heading-right">
          <Button1 text={"Prijava"} fontSize={"25px"} />
          <Button1 text={"Registracija"} fontSize={"25px"} />
        </div>
      </div>
      <div id="content">
        <div id="logo-and-search">
          <LogoComponent />
          <SearchField1 placeholder="Unesite simptom" />
        </div>
        {/* <div id="img-container">
          <div className="img-item">
            <img src="../../../images/prvapomoc 1.png"></img>
          </div>
          <div className="img-item">
            <img src="../../../images/drugapomoc 1.png"></img>
          </div>
          <div className="img-item">
            <img src="../../../images/trecapomoc 1.png"></img>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default IndexApp;
