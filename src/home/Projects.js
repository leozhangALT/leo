import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import sortGif from './gifs/sort.gif';
import queueGif from './gifs/queue.gif';

import Button from '@material-ui/core/Button';

const projects = [
    {
        name: 'Sorting Visualizer',
        desc: 'Want to see how popular sorting algorithms actually compare and modify the array? Try the Sorting Visualizer to see it in actions.',
        image: sortGif,
        route: 'sorting',
    },
    {
        name: 'Customer Booking',
        desc: 'Your walk in barber shop is doing better than ever, and the customers just keep pilling in. Try this self queueing tool to keep things organized.',
        image: sortGif,
        route: 'booking',
    },
    {
        name: 'Barber Shop Queue',
        desc: 'Your walk in barber shop is doing better than ever, and the customers just keep pilling in. Try this self queueing tool to keep things organized.',
        image: queueGif,
        route: 'queue',
    },
]

class Projects extends Component {

  render() {
    return (
      <div className='projects-root'>
        <div style={{color: this.props.theme}} className='projects-header'>My Personal Projects</div>
        {projects.map((proj, index)=>{
            return(
                <div key={proj.name} style={{flexDirection: index%2 ? 'row-reverse' : null}} className='project-container'>
                    <img src={proj.image} className={'projects-img'} />
                    <div className={'project-right'}>
                        <p className='projects-title'>{proj.name}</p>
                        <p className='projects-desc'>{proj.desc}</p>
                        <Button className='project-btn' style={{backgroundColor: this.props.theme}} variant="contained" color="primary">Try Now</Button>
                    </div>
                </div>
            )
        })}
      </div>
    );
  }
  
}

export default Projects;
