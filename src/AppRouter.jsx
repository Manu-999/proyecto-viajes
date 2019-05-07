import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Pages/Home/index';
import Register from './components/Pages/Register/index';
import Login from './components/Pages/Login/index';

function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/register" component={Register} exact></Route>
                <Route path="/login" component={Login} exact></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;