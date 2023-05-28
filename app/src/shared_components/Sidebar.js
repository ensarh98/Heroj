import "./Sidebar.css"

import SidebarButton from "./SidebarButton";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarButton 
        link="http://localhost:3000/home"
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
  );
}