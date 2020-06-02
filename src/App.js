import React, {Component} from 'react';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';

import Home from './home/Home';
import Path from './path/Path';
import Sort from './sort/sort';
import Stack from './stack/Stack';
import Queue from './queue/App';
import Random from './random/Random';
import Unknown from './unknown';

require('typeface-montserrat');
require('typeface-quicksand');

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/path' exact component={Path}/>
          <Route path='/sort' exact component={Sort}/>
          <Route path='/stack' exact component={Stack}/>
          <Route path='/queue' exact component={Queue}/>
          <Route path='/random' exact component={Random}/>
          <Route path='/' component={Unknown}/>
        </Switch>
      </HashRouter>
    );
  }
  
}

export default App;
