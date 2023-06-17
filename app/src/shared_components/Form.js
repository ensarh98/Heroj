import "./Form.css";

export default function Form(props){
    return(
        <div className={"Form"}>
            {
                props.children &&
                props.children
            }
        </div>
    )
}