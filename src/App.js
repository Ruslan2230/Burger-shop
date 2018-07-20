 import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Router from './Router'


const Navigation = (props) => <nav>
    <ul>
        <li><NavLink to='./'>Замовити бургер</NavLink></li>
        <li><NavLink to='./cart'>Редагувати корзину</NavLink></li>
        <li><NavLink to='./creatPage'>Створити карточку</NavLink></li>
    </ul>
</nav>


class App extends Component {
  render() {
    return <div className='page-container'>
        <h1>БургерShop</h1>

        <Navigation />
        <Router />
    </div>
  }
}

export default App;
