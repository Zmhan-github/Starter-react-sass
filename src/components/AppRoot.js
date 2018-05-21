import React, { Component } from 'react';
import moon from '../data/moon.html';
import lest from '../data/lest.html'
import man from '../data/man.html'

export default class extends Component {
 
    render() {
        return (
        <header className="header">
            <div className="text-header">Some text</div>    
            <div className="cloud fcloud01"></div>
            <div className="cloud fcloud02"></div> 
            <div className="svg-content" dangerouslySetInnerHTML={{ __html: moon}} />  
            <div className="svg-content" dangerouslySetInnerHTML={{ __html: lest}} />  
            <div className="svg-content" dangerouslySetInnerHTML={{ __html: man}} />
        </header>
        )
    }
}