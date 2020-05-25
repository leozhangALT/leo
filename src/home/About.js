import React, {Component} from 'react';
import './About.css';
import { motion } from 'framer-motion';

class About extends Component {
    render() {
        return(
            <div className='about-root'>
                <div className='about-container'>
                    <p className='about-title'>Hi, I'm Leo, an aspiring Software Development Engineer</p>
                    <img className='about-img' src={require('./images/bitmoji_smile.png')}/>
                    <div style={{height: '0'}}>
                        <motion.div
                            style={{top: '-386px'}}
                            className={'about-rotate'}
                            animate={{rotate: 360}}
                            transition={{loop: Infinity, duration: 8, ease: 'linear'}}
                        >
                            <img src={require('./images/green.png')}/>
                        </motion.div>
                    </div>
                    <div style={{height: '0'}}>
                        <motion.div
                            style={{top: '-385px'}}
                            className={'about-rotate'}
                            animate={{rotate: 360}}
                            transition={{loop: Infinity, duration: 6, ease: 'linear'}}
                        >
                            <img src={require('./images/purple.png')}/>
                        </motion.div>
                    </div>
                    <div style={{height: '0'}}>
                        <motion.div
                            style={{top: '-360px'}}
                            className={'about-rotate'}
                            animate={{rotate: 360}}
                            transition={{loop: Infinity, duration: 10, ease: 'linear'}}
                        >
                            <img src='https://github-atom-io-herokuapp-com.freetls.fastly.net/assets/index-portal-blue-50996d0762fb6d9ee13d6a52404dd01327fc542cc729777d532c9b633103c835.svg'/>
                        </motion.div>
                    </div>
                    <p className='about-subtitle'>Currently Studying Computer Engineering at SFU</p>
                </div>
            </div>
        )
    }
}

export default About;