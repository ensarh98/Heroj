import Button1 from '../../shared_components/Button1';
import './ReplyBox.css'

export default function ReplyBox(props) {
  return (
    <div className='replybox-container' ref={props.innerRef}>
      <textarea
        className="textarea-box"
        placeholder="Write your post here..."
        rows={7}
        onChange={(e) => props.handleTextChange(e.target.value)}
      >
      </textarea>
      <Button1
        text={"Cancel"}
        fontSize={"20px"}
        onClick={props.handleClickCancel}
      />
      <Button1
        text={"Post"}
        fontSize={"20px"}
        onClick={props.handleClickPost}
      />
    </div>
  );
}