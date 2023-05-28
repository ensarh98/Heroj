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
      <Sidebar innerRef={sidebarRef} closeNav={closeNav} />
      <Button1 text={"Prijava"} fontSize={"25px"} />
      <Button1 text={"Registracija"} fontSize={"25px"} />
      <div>
        <ShowSidebar onClick={openNav} />
      </div>
      <div>
        <LogoComponent />
        <SearchField1 placeholder="Unesite simptom" />
      </div>
    </div>
  );
}

export default IndexApp;
