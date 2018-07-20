import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import CreatPage from './pages/creatcartpage'

const Router = () =>  (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/creatPage' component={CreatPage} />
    </Switch>
);

export default Router