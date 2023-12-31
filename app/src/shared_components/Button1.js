import "./Button1.css";

function Button1(props) {
  const fontSize = {
    fontSize: props.fontSize,
  };
  return (
    <button className={props.class + " Button1"} style={fontSize} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button1;
