import React, {Component} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Home.css';

import sortGif from './gifs/sort.gif';
import queueGif from './gifs/queue.gif';
import bookingGif from './gifs/booking.gif';

import Button from '@material-ui/core/Button';

const projects = [
    {
        name: 'Sorting Visualizer',
        desc1: 'Want to see how popular sorting algorithms actually compare and modify the elements? The sorting visualizer highlights the values being compared and changed for your viewing pleasure.',
        desc2: 'Randomize an array of up to 1000 integers, pick the sorting algorithm and speed of your choice, sit back and watch the magic happen.',
        image: sortGif,
        route: 'sorting',
        done: true,
    },
    {
        name: 'Barber Shop Queue',
        desc1: 'Business at your walk in barber shop is doing better than ever, you\'re having a hard time staying organized with all the customers piling in. You want to keep costs low and avoid hiring a secretary, what do you do?',
        desc2: 'You use a simple and intuitive app for customers to queue themselves as they walk in. No need to memorize who walked in first or use a messy system like take a number.',
        image: queueGif,
        route: 'queue',
        done: true,
    },
    {
        name: 'Customer Booking',
        desc1: 'Business at your walk in barber shop is doing even better than before, but cusotmer wait times are skyrocketing. You don\'t want customers to get impatient and walk out the door, what do you do?',
        desc2: 'You use a beautiful online booking platform, allowing your customers to easily book their appointments. Customers are willing to pay more to avoid the wait. Resulting in more money in your pocket for doing the same amount of work.',
        image: bookingGif,
        route: 'booking',
        done: false,
    },
]

class Projects extends Component {

  render() {
    return (
      <div className='projects-root'>
        <div style={{color: this.props.theme}} className='projects-header'>Projects</div>
        {projects.map((proj, index)=>{
            return(
                <div key={proj.name} style={{flexDirection: index%2 ? 'row-reverse' : null}} className='project-container'>
                    <img src={proj.image} className={'projects-img'} />
                    <div className={'project-right'}>
                        <p className='projects-title'>{proj.name}</p>
                        <p className='projects-desc'>{proj.desc1}</p>
                        <p className='projects-desc'>{proj.desc2}</p>
                        <Button className='project-btn' style={{backgroundColor: this.props.theme}} variant="contained" color="primary">
                            <Link style={{color: 'white', textDecoration: 'none'}} to='/sort' >{proj.done ? 'Try Now' : 'Work in Progress'}</Link>
                        </Button>
                    </div>
                </div>
            )
        })}
      </div>
    );
  }
  
}

export default Projects;
