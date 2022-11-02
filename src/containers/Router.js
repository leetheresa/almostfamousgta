import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from "./Homepage.js";
import About from "./About.js";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Homepage}/>
            <Route path={"/about"} component={About}/>
        </Switch>
    </BrowserRouter>
)

export default Router