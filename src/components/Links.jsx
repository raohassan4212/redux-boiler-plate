import { Link } from "react-router-dom";

const Links = () => {
    return (
        <>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
        </>
    );
}

export default Links;