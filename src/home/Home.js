import React, {Component} from 'react';
import './Home.css';

import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './contact';

const THEME = 'cornflowerblue'

class Home extends Component {

  render() {
    return (
      <div style={{overflowX: 'hidden'}}>
        <Header
          theme = {THEME}
        />
        <About
          theme = {THEME}
        />
        <Projects
          theme = {THEME}
        />
        <Contact
          theme = {THEME}
        />
      </div>
    );
  }
  
}

export default Home;
