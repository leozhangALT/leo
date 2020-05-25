import React, {Component} from 'react';
import RandomMovie from './RandomMovie';
import RandomTv from './RandomTv';
import './Random.css';

const movie_poster_host = 'https://image.tmdb.org/t/p/w500/';
const movie_id_max = 700000;
const tv_id_max = 100000;

class Random extends Component {
    state = {

    };

    componentDidMount() {
        
    }

    render() {
        return(
            <div className={'random-root'}>
                <RandomMovie
                    host = {movie_poster_host}
                    max = {movie_id_max}
                />
                <RandomTv
                    host = {movie_poster_host}
                    max = {tv_id_max}
                />
            </div>
        )
    }
}

export default Random;
