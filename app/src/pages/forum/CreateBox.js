import Button1 from "../../shared_components/Button1";
import "./CreateBox.css"

export default function CreateBox(props) {
  return (
    <div className='createbox-container' ref={props.innerRef}>
      <label>Title:</label>
      <input className="title-input" type="text" onChange={(e) => props.handleTitleChange(e.target.value)}></input>
      <label>Post:</label>
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
        text={"Create"}
        fontSize={"20px"}
        onClick={props.handleClickPost}
      />
    </div>
  );
}