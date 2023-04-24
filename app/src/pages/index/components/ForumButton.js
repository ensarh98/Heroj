import { Link } from 'react-router-dom';

function ForumButton(props) {
    return (
        <Link to={"/forum"}>
            <button className={`btn btn-outline-danger ${props.className}`}>Forum</button>
        </Link>
    );
}

export default ForumButton;