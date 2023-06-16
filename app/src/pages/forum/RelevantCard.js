import "./RelevantCard.css";

export default function RelevantCard(props) {
    return(
        <div className={"RelevantCard"}>
            <div className={"NameDiv"}>
                {props.name}
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}