import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Router from './Router'

const Navigation = (props) => <nav>
    <ul>
        <li><NavLink to='./'>Home</NavLink></li>
        <li><NavLink to='./cart'>Cart</NavLink></li>
    </ul>
</nav>


class App extends Component {
  render() {
    return <div className='page-container'>
        <h1>Shopping cart</h1>
        <Navigation />
        <Router />
    </div>
  }
}

export default App;
