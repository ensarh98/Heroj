import "./RelevantCardRow.css";

export default function RelevantCardRow(props) {
    const truncatedText = props.text.length > 22 ? props.text.slice(0, 22) + "..." : props.text;
    return(
        <div className={"RelevantCardRow"}>
            <a className={"RelevantCardText"} href={props.link}>
                {truncatedText}
            </a>
        </div>
    )
}