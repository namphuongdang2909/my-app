import React from 'react'
import { Switch, Route } from 'react-router'
import HomePage from '../pages/index'
import UserDetails from '../pages/details'

const AppContainer = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user/:userId" component={UserDetails} />
        </Switch>
    );
}

export default AppContainer;