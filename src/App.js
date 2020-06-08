import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './features/nav/Navbar';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/checkout" component={Checkout}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
