import React from 'react';
import Logout from './log/Logout.js';
import './Main.css';

export default function Main(props){

    const { userName }=props;

    return(
        <div className="main">
            {userName &&
                <div className="main-info">
                    <p className="main-user">{userName}</p>
                    <Logout />
                </div>
            }
            <h1 className="main-title">Chat App</h1>
        </div>
        
    )
}