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

    fetch('https://api.covidtracking.com/v1/states/current.json')
    .then((data) => { return (console.log(data.json())) })
    .then((data) => { dispatch({type: "API", api: data})})
    .catch((err) => console.log(err));
    
    

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