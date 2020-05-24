import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import sortGif from './gifs/sort.gif';
import queueGif from './gifs/queue.gif';
import bookingGif from './gifs/booking.gif';

import Button from '@material-ui/core/Button';

const projects = [
    {
        name: 'Sorting Visualizer',
        desc1: 'Want to see how popular sorting algorithms actually compare and modify the array? The sorting visualizer highlights the values being compared and changed for your viewing pleasure.',
        desc2: 'Randomize an array of up to 1000 integers, pick the sorting algorithm and speed of your choice, sit back and watch the magic happen.',
        image: sortGif,
        route: 'sorting',
        done: true,
    },
    {
        name: 'Barber Shop Queue',
        desc1: 'Business at your walk in barber shop is doing better than ever, your having a hard time staying organized with all customers piling in. You want to keep costs low and avoid hiring a secretary, what do you do?',
        desc2: 'You use a simple and intuitive app for customers to queue themselves as they walk in. No need to memroize the order they walked in or using a messy system like take a number.',
        image: queueGif,
        route: 'queue',
        done: true,
    },
    {
        name: 'Customer Booking',
        desc1: 'Business at your walk in barber shop is doing even better than before, customers wait times are increasing drastically. You don\'t customers to get impatient and walk out the door, what do you do?',
        desc2: 'You use a beautiful online booking platform. Allowing your customers to book their appointments online. As customers are willing to pay more to avoid the wait. Resulting in more money in your pocket for doing the same amount of work.',
        image: bookingGif,
        route: 'booking',
        done: false,
    },
]

class Projects extends Component {

  render() {
    return (
      <div className='projects-root'>
        <div style={{color: this.props.theme}} className='projects-header'>Personal Projects</div>
        {projects.map((proj, index)=>{
            return(
                <div key={proj.name} style={{flexDirection: index%2 ? 'row-reverse' : null}} className='project-container'>
                    <img src={proj.image} className={'projects-img'} />
                    <div className={'project-right'}>
                        <p className='projects-title'>{proj.name}</p>
                        <p className='projects-desc'>{proj.desc1}</p>
                        <p className='projects-desc'>{proj.desc2}</p>
                        <Button className='project-btn' style={{backgroundColor: this.props.theme}} variant="contained" color="primary">{proj.done ? 'Try Now' : 'Work in Progress'}</Button>
                    </div>
                </div>
            )
        })}
      </div>
    );
  }
  
}

export default Projects;
