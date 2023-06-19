import "./ForumRepliesCard.css";

export default function ForumRepliesCard(props) {
  return (
    <div className={"ForumReplyCard"}>
      <div className={"ProfileSection"}>
        <img
          src={"../../../images/TopicCardLeftImage.png"}
          className={"ImageReply"}
        />
        <div className="certified-image-wrapp">
          <span className={"Username"}>{props.username}</span>
          {props.is_certified && (
            <img
              src="../../../images/is_certified.png"
              className="certified-image"
              title="certified user"
            />
          )}
        </div>

        <span className={"Datetime"}>
          <span>{props.time}</span>
          <span>{props.date}</span>
        </span>
      </div>
      <div className={"MainSectionReply"}>
        <div className={"TopSection"}>
          <span className={"ReplyTo"}>{props.replyTo}</span>
          {props.replyNumber}
        </div>
        <blockquote className={"ReplyText"}>{props.text}</blockquote>
      </div>
    </div>
  );
}
