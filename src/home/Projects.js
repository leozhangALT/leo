import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const projects = [
    {
        name: 'Sorting Visualizer',
        desc: 'Want to see how popular sorting algorithms actually compare and modify the array? Try the Sorting Visualizer to see it in actions.',
        image: 'https://i.imgur.com/jFXPgvL.png',
        route: 'sorting',
    },
    {
        name: 'Barber Shop Queue',
        desc: 'Your walk in barber shop is doing better than ever, and the customers just keep pilling in. Try this self queueing tool to keep things organized.',
        image: 'https://i.imgur.com/jFXPgvL.png',
        route: 'queue',
    },
]

class Projects extends Component {

  render() {
    return (
      <div className='projects-root'>
        Projects
      </div>
    );
  }
  
}

export default Projects;
