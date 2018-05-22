import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring'
import moon from '../images/header__moon.svg';
import lest from '../data/lest.html'
import man from '../data/man.html'


  
 

export default class extends Component {
 
    render() {
        return (
        <Parallax pages={2}>
            <ParallaxLayer offset={0} speed={0.2} >
                <header className="header">
                    <div className="header__bg"></div>
                    <div className="text-header">Some text</div>    
                    <div className="header__cloud header__cloud--1" />    
                    <div className="header__cloud header__cloud--2" />
                    <div className="header__moon" />
                    <div className="svg-content" dangerouslySetInnerHTML={{ __html: man}} />
                </header>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0.8}>
                second Page
            </ParallaxLayer>              
        </Parallax>
        )
    }
}