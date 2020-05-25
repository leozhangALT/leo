import React, {Component} from 'react';
import './About.css';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const title = 'Hi, I\'m Leo, an aspiring Software Development Engineer';
const subTitle = 'Currently Studying Computer Engineering at SFU'

class About extends Component {
    state = {
        scrollHint: true,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if(this.state.scrollHint){
            this.setState({scrollHint: false})
        }
    }

    render() {
        return(
            <div className='about-root'>
                <div className='about-container'>
                    <p className='about-title'>{title}</p>
                    <img alt='bitmoji' className='about-img' src={require('./images/bitmoji_smile.png')}/>
                    <div style={{height: '0'}}>
                        <motion.div
                            style={{top: '-386px'}}
                            className={'about-rotate'}
                            animate={{rotate: 360}}
                            transition={{loop: Infinity, duration: 8, ease: 'linear'}}
                        >
                            <img alt='green' src={require('./images/green.png')}/>
                        </motion.div>
                    </div>
                    <div style={{height: '0'}}>
                        <motion.div
                            style={{top: '-385px'}}
                            className={'about-rotate'}
                            animate={{rotate: 360}}
                            transition={{loop: Infinity, duration: 6, ease: 'linear'}}
                        >
                            <img alt='purple' src={require('./images/purple.png')}/>
                        </motion.div>
                    </div>
                    <div style={{height: '0'}}>
                        <motion.div
                            style={{top: '-360px'}}
                            className={'about-rotate'}
                            animate={{rotate: 360}}
                            transition={{loop: Infinity, duration: 10, ease: 'linear'}}
                        >
                            <img alt='blue' src={require('./images/blue.svg')}/>
                        </motion.div>
                    </div>
                    <p className='about-subtitle'>{subTitle}</p>
                    <div style={{opacity: this.state.scrollHint ? '1' : '0'}} className='about-scroll-hint'><ArrowDownwardIcon/></div>
                </div>
            </div>
        )
    }
}

export default About;