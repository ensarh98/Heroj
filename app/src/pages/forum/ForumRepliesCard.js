import "./ForumRepliesCard.css";

export default function ForumRepliesCard(props) {
    return(
        <div className={"ForumReplyCard"}>
            <div className={"ProfileSection"}>
                <img src={"../../../images/TopicCardLeftImage.png"} className={"ImageReply"}/>
                <span className={"Username"}>{props.username}</span>
                <span className={"Datetime"}>
                    <span>{props.time}</span>
                    <span>{props.date}</span>
                </span>
            </div>
            <div className={"MainSectionReply"}>
                <div className={"TopSection"}>
                    <span className={"ReplyTo"}>
                        {props.replyTo}
                    </span>
                    {props.replyNumber}
                </div>
                <blockquote className={"ReplyText"}>
                    {props.text}
                </blockquote>
            </div>
        </div>
    )
}