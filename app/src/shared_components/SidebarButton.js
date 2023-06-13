import "./Sidebar.css"

export default function SidebarButton(props) {
  return (
    <div className="sidebar-button">
      <a href={props.link}>{props.text}</a>
    </div>
  );
}