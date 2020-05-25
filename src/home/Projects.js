import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import WOW from 'wowjs';

import sortGif from './gifs/sort.gif';
import queueGif from './gifs/queue.gif';
import bookingGif from './gifs/booking.gif';
import randomGif from './gifs/random.gif';

import Button from '@material-ui/core/Button';

const projects = [
    {
        name: 'Sorting Visualizer',
        desc1: 'Want to see how popular sorting algorithms actually compare and modify the elements? The sorting visualizer highlights the values being compared and changed for your viewing pleasure.',
        desc2: 'Randomize an array of up to 1000 integers, pick the sorting algorithm and speed of your choice, sit back and watch the magic happen.',
        image: sortGif,
        route: 'sort',
        done: true,
    },
    {
        name: 'Barber Shop Queue',
        desc1: 'Business at your walk in barber shop is doing better than ever, you\'re having a hard time keeping track of all the new customers pilling in. You want to keep costs low and avoid hiring a secretary, what do you do?',
        desc2: 'You use a simple and intuitive app for customers to queue themselves as they walk in. No need to memorize who walked in first or use a messy system like take a number. Password for demo is password.',
        image: queueGif,
        route: 'queue',
        done: true,
    },
    {
        name: 'Customer Booking',
        desc1: 'Business at your walk in barber shop is doing even better than before, but with all the new customers, wait times are now skyrocketing. You don\'t want customers to get impatient and walk out the door, what do you do?',
        desc2: 'You use a beautiful online booking platform, allowing your customers to easily book their appointments. Customers are willing to pay more to avoid the wait. Resulting in more money in your pocket for doing the same amount of work.',
        image: bookingGif,
        route: '/',
        done: false,
    },
    {
        name: 'Random Movie/TV Show',
        desc1: 'Covid-19 has kept you indoors, you just finished binge watching The Office for the 20th time. You decide that it\'s finally time to watch something new. But what?',
        desc2: 'Use the Random Movie/TV Show tool to help you decide. The App makes an api call to moviedb.org and fetches a random movie or tv show, displaying its contents nicely for you to checkout.',
        image: randomGif,
        route: 'random',
        done: true,
    },
]

class Projects extends Component {

    componentDidMount(){
        new WOW.WOW().init();
    }

  render() {
    return (
      <div className='projects-root'>
        <div style={{color: this.props.theme}} className='projects-header'>My Projects</div>
        {projects.map((proj, index)=>{
            return(
                <div key={proj.name} style={{flexDirection: index%2 ? 'row-reverse' : null}} className={index%2 ? 'project-container wow slideInLeft' : 'project-container wow slideInRight'}>
                    <img alt={proj.name} src={proj.image} className={'projects-img'} />
                    <div className={'project-right'}>
                        <p className='projects-title'>{proj.name}</p>
                        <p className='projects-desc'>{proj.desc1}</p>
                        <p className='projects-desc'>{proj.desc2}</p>
                        <Button className='project-btn' style={{backgroundColor: this.props.theme}} variant="contained" color="primary">
                            <Link style={{color: 'white', textDecoration: 'none'}} to={proj.route} >{proj.done ? 'Try Now' : 'Work in Progress'}</Link>
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
