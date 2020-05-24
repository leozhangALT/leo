import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div>
        Home
        <Link to="/sort">
            go to sort
        </Link>
      </div>
    );
  }
  
}

export default Home;
