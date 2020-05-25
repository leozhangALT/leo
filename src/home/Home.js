import React, {Component} from 'react';
import './Home.css';

import Projects from './Projects'
import About from './About'

const THEME = 'cornflowerblue'

class Home extends Component {

  render() {
    return (
      <div>
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
