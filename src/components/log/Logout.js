import React from 'react';
import firebase from '../../db/firebase';
import  './Logout.css';

function signOut(){
    firebase
    .auth()
    .signOut()
}

export default function Logout(){
    return(
        <button className="logout-button" onClick={signOut}>Sign Out</button>
    )
}