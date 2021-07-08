import Links from "../components/Links";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    const history = useHistory();
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    function update() {
        dispatch({type: "UPDATE", name: "Rao Kuamil"});
    }

    function goto() {
        history.push("/contact")
    }

    // API

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((data) => { return (console.log(data.json())) })
    

    return (
        <>
        <h1>Home Page</h1>
        <Links />
        <button onClick={goto}>Contact Page</button>
        <h1>{state.name}</h1>
        <button onClick={update}>Update</button>
        </>
    );
}
 
export default Home;