import "./Form.css";

export default function Form(props){
    return(
        <form className={"Form"} onSubmit={props.onSubmit}>
            {
                props.children &&
                props.children
            }
        </form>
    )
}