import React from "react";
import "./Case.css";
import { Link } from "react-router-dom";

export default function Case(props) {
  return (
    <div className="wrapp-case">
      <Link to={props.link} className="photo-text-case">
        <img src={props.imagePath} className="photo-case" />
        <span className="text-case">{props.text}</span>
      </Link>
    </div>
  );
}
