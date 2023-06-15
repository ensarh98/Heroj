import HideSidebar from "./HideSidebarButton";
import LogoComponent from "./LogoComponent";
import "./Sidebar.css"

import SidebarButton from "./SidebarButton";

export default function Sidebar({ innerRef, closeNav }) {
  return (
    <div className="sidebar" ref={innerRef}>
      <div className="sidebar-header">
        <HideSidebar onClick={closeNav} />
      </div>
      <div className="sidebar-body">
        <SidebarButton 
          link="http://localhost:3000/"
          text="HOME"
        />
        <SidebarButton
          link="http://localhost:3000/forum"
          text="FORUM"
        />
        <SidebarButton
          link="http://localhost:3000/predavanja"
          text="PREDAVANJA"
        />
        <SidebarButton
          link="http://localhost:3000/quiz"
          text="KVIZ"
        />
        <SidebarButton
          link="http://localhost:3000/about"
          text="O NAMA"
        />
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-footer-logo">
          <LogoComponent />
        </div>
      </div>
    </div>
  );
}