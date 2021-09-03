import React, { Component } from 'react';
import './IdCard.css';

export default class IdCard extends Component {
    render() {
        return (
            <div className="idCard">
                <div className="cardIcon">
                    <img src={this.props.picture} alt="icon"/>
                </div>

                <div className="cardInfo">
                    <p><strong>First name: </strong>{this.props.firstName}</p>
                    <p><strong>Last name: </strong>{this.props.lastName}</p>
                    <p><strong>Gender: </strong>{this.props.gender}</p>
                    <p><strong>Height: </strong>{this.props.height}</p>
                    <p><strong>Birth: </strong>{this.props.birth}</p>
                </div>
            </div>
        )
    }
}