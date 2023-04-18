function Intervention(props) {
    return (
        <a className={props.className} href={props.href}>
            {props.name}
        </a>
    );
}

export default Intervention;