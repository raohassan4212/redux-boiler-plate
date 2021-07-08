import Links from "../components/Links";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Home = () => {
    const history = useHistory();
    const state = useSelector(state => state);

    function goto() {
        history.push("/contact")
    }

    return (
        <>
        <h1>Home Page</h1>
        <Links />
        <button onClick={goto}>Contact Page</button>
        <h1>{state.name}</h1>
        </>
    );
}
 
export default Home;