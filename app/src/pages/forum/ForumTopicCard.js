import "./ForumTopicCard.css";

export default function ForumTopicCard(props) {
    return(
        <div className={"ForumTopicCard"}>
            <div className={"SectionBox"}>
                <img src={"../../../images/TopicCardLeftImage.png"}/>
            </div>
            <div className={"MainSection"}>
                <a className={"TopicText"} href={props.link}>
                    {props.topicText}
                </a>
                <div>
                    Korisnik:
                    <span className={"UsernameSpan"}>
                        {props.username}
                    </span>
                </div>
            </div>
            <div className={"SectionBox"}>
                <span>{props.dayOfTheWeek}</span>
                <span>{props.date}</span>
            </div>
            <div className={"SectionBox"}>
                <img className={"RepliesIcon"} src={"../../../images/ImageForReplies.svg"}/>
                <span>{props.repliesNumber}</span>
            </div>
        </div>
    )
}