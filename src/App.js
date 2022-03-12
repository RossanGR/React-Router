import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contatc';
import Card from './components/Card';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/:user' component={Card}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
