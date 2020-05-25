import React, {Component} from 'react';
import './Random.css';
import DiceIcon from "@material-ui/icons/Casino";
import Button from "@material-ui/core/Button";


class RandomTv extends Component {
    state = {
        title: '',
        description: '',
        image: '',
    };

    componentDidMount() {
        this.random();
    }

    random = () => {
        let random_int = Math.floor(Math.random() * this.props.max) + 1;
        fetch('https://api.themoviedb.org/3/tv/' + random_int +'?api_key=bf5d0c0a58b811a2da6c7783e8a34132&language=en-US')
            .then(res => {
                res.json().then(res => {
                    if(!res.poster_path || !res.overview){
                        this.random();
                    } else {
                        this.setState({title: res.name, description: res.overview, image: this.props.host + res.poster_path});
                    }
                })
            })
            .catch(console.error)
    };

    render() {
        return(
            <div className={'random-movie-root'}>
                <div className={'random-btn'}>
                    <span className={'title-text'}>Random TV</span>
                    <Button
                        onClick={() => this.random()}
                        variant="contained"
                        color="primary"
                        startIcon={<DiceIcon />}
                    >
                        Random
                    </Button>
                </div>
                <div className={'title-text'}>{this.state.title}</div>
                <div>
                    <img alt={'movie poster'} className={'movie-image'} src={this.state.image} />
                </div>
                <div className={'movie-description'}>{this.state.description}</div>
            </div>
        )
    }
}

export default RandomTv;
