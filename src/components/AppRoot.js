import React, { Component } from 'react';
import MarkdownData from '../data/post.md'

import logo from '../images/logo-1.svg';

export default class extends Component {
 
    render() {
        return (
        <header className="header-content">
            <div className="text-header">Some text</div>    
            <div className="cloud fcloud01"></div>
            <div className="cloud fcloud02"></div>
        </header>
        )
    }
}