import { Link } from "react-router-dom";
import "./ForumTopicCard.css";

export default function ForumTopicCard(props) {
    return(
        <div className={"ForumTopicCard"}>
            <div className={"SectionBox"}>
                <img src={"../../../images/TopicCardLeftImage.png"} className={"LeftSectionBoxImage"}/>
            </div>
            <div className={"MainSection"}>
                <Link
                  to={props.link}
                  className="TopicText"
                >
                    {props.topicText}
                </Link>
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