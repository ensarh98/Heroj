import "./Form.css";

export default function Form(props){
    return(
        <div className={props.class + " Form"}>
            {
                props.children &&
                props.children
            }
        </div>
    )
}