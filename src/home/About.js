import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className='about-root'>
                <div className='about-container'>
                    <p className='about-title'>Hi, I'm Leo, an aspiring Software Development Engineer</p>
                    <img className='about-img' src={require('./images/bitmoji_smile.png')}/>
                    <p className='about-subtitle'>Currently Studying Computer Engineering at SFU</p>
                </div>
            </div>
        )
    }
}

export default About;