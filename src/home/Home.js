import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Projects from './Projects'

class Home extends Component {

  render() {
    return (
      <div>
        <Projects/>
      </div>
    );
  }
  
}

export default Home;
