import Links from "../components/Links";
import { useHistory } from "react-router";

const Home = () => {
    const history = useHistory();

    function goto() {
        history.push("/contact")
    }

    return (
        <>
        <h1>Home Page</h1>
        <Links />
        <button onClick={goto}>Contact Page</button>
        </>
    );
}
 
export default Home;