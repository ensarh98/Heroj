import "./FormInput.css";

export default function FormInput(props){
    return(
        <input className={"FormInput"} value={props.value} placeholder={props.placeholder} type={props.type} name={props.name} onChange={props.onChange} onBlur={props.onBlur}/>
    )
}