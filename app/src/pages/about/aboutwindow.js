import "./aboutwindow.css"
export default function AboutWindow(props){
    return (
        <div className={"AboutWindow"}>
            <div className={"AboutWindowTitle"}>
                {props.title}
            </div>
            <div className={"AboutWindowBody"}>
                {props.children}
            </div>
        </div>
    )
}