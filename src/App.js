import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';

import Home from './home/Home';
import Sort from './sort/sort';
import Queue from './queue/App';
import Unknown from './unknown';

require('typeface-montserrat');
require('typeface-quicksand');

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/sort' exact component={Sort}/>
          <Route path='/queue' exact component={Queue}/>
          <Route path='/' component={Unknown}/>
        </Switch>
      </HashRouter>
    );
  }
  
}

export default App;
