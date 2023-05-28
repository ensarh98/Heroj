import "./Button1.css";

function Button1(props) {
  const fontSize = {
    fontSize: props.fontSize,
  };

  return (
    <button className={"Button1"} style={fontSize}>
      {props.text}
    </button>
  );
}

export default Button1;
