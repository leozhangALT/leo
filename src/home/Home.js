import React, {Component} from 'react';
import './Home.css';

import Projects from './Projects';
import About from './About';
import Header from './Header';

const THEME = 'cornflowerblue'

class Home extends Component {

  render() {
    return (
      <div>
        <Header
          theme = {THEME}
        />
        <About
          theme = {THEME}
        />
        <Projects
          theme = {THEME}
        />
      </div>
    );
  }
  
}

export default Home;
