import React, {Component} from 'react';
import './contact.css';
import './Home.css';

import linkedInImage from './images/linkedin_logo.png';
import GitImage from './images/github_logo.svg';
import LeetImage from './images/LeetCode_logo.png';
import HackerImage from './images/HackerRank_logo.png';

const profiles = [
    {
        name: 'LinkedIn',
        img: linkedInImage,
        link: 'https://www.linkedin.com/in/leo-zhang-25b253122/',
    },
    {
        name: 'GitHub',
        img: GitImage,
        link: 'https://github.com/TerryHintz',
    },
    {
        name: 'LeetCode',
        img: LeetImage,
        link: 'https://leetcode.com/terryhintz/',
    },
    {
        name: 'HackerRank',
        img: HackerImage,
        link: 'https://www.hackerrank.com/cza82',
    },
]

class Contact extends Component {
    state = {
        
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <div className='contact-root'>
                <div style={{color: this.props.theme}} className='projects-header'>My Profiles</div>
                <div className='contact-flex'>
                    {profiles.map((profile)=>{
                        return(
                            <div className='contact-container'>
                                <img style={{width: '200px'}} src={profile.img}/>
                                <p>{profile.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Contact;