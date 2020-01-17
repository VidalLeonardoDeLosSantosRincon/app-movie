import React from "react";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

//components
import App from "../components/App";

//pages
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";


const AppRoutes = () =>(
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route component={PageNotFound}/>
            </Switch>
        </App>
    </Router>
);
export default AppRoutes;