import React, { Component } from 'react';
import './Greetings.css';


function greeting(lang) {
    switch(lang){
        case 'fr':
            return 'Bonjour';

        case 'es':
            return 'Hola';

        case 'en':
            return 'Hello';
        
        case 'de':
            return 'Hallo';
    }
}

export default class Greetings extends Component {
    render() {
        return(
            <div className='greetings'>
                <div className='greeting'>
                    <h2>{greeting(this.props.lang)}, {this.props.children}</h2>
                </div>
            </div>
        )
    }
}