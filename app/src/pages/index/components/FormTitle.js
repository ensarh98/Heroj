function FormTitle(props) {

    return (
        <div className={"container-fluid border d-flex justify-content-end p-0"}>
            <span>{props.formName}</span>
            <button onClick={props.onClose}>X</button>
        </div>
    );
}

export default FormTitle;