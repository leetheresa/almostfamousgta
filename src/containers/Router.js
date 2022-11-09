import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from "./Homepage.js";
import About from "./About.js";
import Gallery from "./Gallery.js";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={Homepage}/>
            <Route path={"/about"} component={About}/>
            <Route path={"/gallery"} component={Gallery}/>
        </Switch>
    </BrowserRouter>
)

export default Router