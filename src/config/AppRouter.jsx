import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const AppRouter = () => {
    return (
        <>
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/profile/:id" component={Profile}/>
        </Router>
        </>
    );
}

export default AppRouter;