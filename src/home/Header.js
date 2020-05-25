import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className='header-root'>
                <div className='header-container'>
                    <span className='header-contact'>Contact Me</span>
                </div>
            </div>
        )
    }
}

export default Header;