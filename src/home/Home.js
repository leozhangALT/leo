import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Projects from './Projects'

const THEME = 'cornflowerblue'

class Home extends Component {

  render() {
    return (
      <div>
        <Projects
          theme = {THEME}
        />
      </div>
    );
  }
  
}

export default Home;
