import "./FormControl.css";

export default function FormControl(props){
    return(
        <div className={"FormControl"}>
            {
                props.isInvalid? props.text : ''
            }
        </div>
    )
}