import React, {Component} from 'react';
import './Header.css';
import Dialog from '@material-ui/core/Dialog';
import EmailIcon from '@material-ui/icons/Email';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Snackbar from '@material-ui/core/Snackbar';

class Header extends Component {
    state = {
        dialog: false,
        copy: false,
    }

    toggleDialog = () => {
        this.setState({dialog: !this.state.dialog});
    }

    closeSnack = () => {
        this.setState({copy: false});
    }

    copied = () => {
        this.setState({copy: true});
    }

    render() {
        return(
            <div className='header-root'>
                <Dialog open={this.state.dialog} onClose={() => this.toggleDialog()}>
                    <div className='header-dialog-container'>
                        <p>Please direct all inquiries through email.</p>
                        <div className='header-dialog-inner'>
                            <EmailIcon style={{fontSize: '30px'}}/>
                            <span id='email' className='header-email'>cza82@sfu.ca</span>
                            <CopyToClipboard text={'cza82@sfu.ca'}>
                                <FileCopyIcon onClick={() => this.copied()} style={{fontSize: '30px', cursor: 'pointer'}}/>
                            </CopyToClipboard>
                        </div>
                        <p>Thank you, have a good day.</p>
                    </div>
                </Dialog>
                <Snackbar
                    open={this.state.copy}
                    autoHideDuration={3000}
                    onClose={this.closeSnack}
                    message='Copied to Clipboard'
                />
                <div className='header-container'>
                    <span onClick={() => this.toggleDialog()} className='header-contact'>Contact Me</span>
                </div>
            </div>
        )
    }
}

export default Header;