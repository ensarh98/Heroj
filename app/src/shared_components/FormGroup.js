import "./FormGroup.css";

export default function FormGroup(props){

    const paddingBottom = {
        paddingBottom: props.paddingBottom
    };


    return(
        <div className={"FormGroup"} style={paddingBottom}>
            {
                props.children &&
                props.children
            }
        </div>
    )
}