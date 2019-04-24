import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Home from './components/Pages/Home/index';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}></Route>
                {/* <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route> */}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;