import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home/Home';
import Sort from './sort/sort';
import Unknown from './unknown';

require('typeface-montserrat');
require('typeface-quicksand');

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sort' exact component={Sort}/>
          <Route path='/' component={Unknown}/>
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
