import React, { Component } from 'react';
import './Random.css';



export default class Random extends Component {
    render() {
        return(
            <div className='random'>

                <h2>Random number between {this.props.min} and {this.props.max} = 
                {Math.floor(Math.random() * (this.props.max - this.props.min) + this.props.min)}</h2>

            </div>
        )
    }
}