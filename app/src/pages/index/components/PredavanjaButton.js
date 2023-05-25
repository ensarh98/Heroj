import { Link } from 'react-router-dom';

function PredavanjaButton(props) {
    return (
        <Link to={"/predavanja"}>
            <button className={`btn btn-outline-danger ${props.className}`}>Predavanja</button>
        </Link>
    );
}

export default PredavanjaButton;