import React, {Component} from 'react';
import './sort.css'

class Graph extends Component {
    render() {

        const graphHeight = window.innerHeight - 250;

        return(
            <div style={{height: graphHeight}} className='sort-container'>
                {this.props.arr.map((num, index) => {
                    return (
                        <div
                            id={index}
                            key={index}
                            style={{
                                height: num + 'px',
                                width: this.props.block_width,
                                margin: '0 0.5px'
                            }}
                            className='number-block'>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Graph;