import "./FormLabel.css";

export default function FormLabel(props){
    return(
        <label className={"FormLabel"} htmlFor={props.for}>{props.text}</label>
    )
}