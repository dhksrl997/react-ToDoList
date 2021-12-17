// @ts-nocheck
import React from 'react';
import moment from "moment";
import '../App.css';
import {useState} from "react";
import logo from '../logo.svg';

const Layout = () => {
    const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
    const [isBlack, setIsBlack] = useState(true);

    setInterval(() => {
        setTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 500);
    const message = 'hello wesley';
    return (
        <>
            <div className="header-section"
                 style={{background: isBlack ? 'rgba(46,47,51)' : 'rgba(23,23,23)', transition: '.5s'}}>
                <img src={logo} width="90px"/>
                <p style={{paddingLeft: '10px', color: isBlack ? 'white' : 'skyblue'}}>My Crawoler App</p>
                <header style={{color: isBlack ? 'white' : 'skyblue'}}>{time}</header>
            </div>
            <div style={{display: 'flex', width: '100%'}}>
                <div className="side-bar"/>
                <div>
                    {message}
                </div>
            </div>
        </>
    )
}

export default Layout;