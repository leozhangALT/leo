import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Temp from './sort/temp';
import Unknown from './unknown';

require('typeface-montserrat');
require('typeface-quicksand');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sorting' exact component={Temp}/>
          <Route path='/' component={Unknown}/>
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
