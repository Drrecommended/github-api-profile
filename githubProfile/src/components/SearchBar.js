import React from 'react';
import '../styles/App.css';


export default function Searchbar() {
    return ( 
            <div className="inputs">
                <input></input>
                <div className="dropdown">
                    <button className="dropbtn">Type: All▾</button>
                    <div className="dropdown-content">
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn2">Language: All▾</button>
                    <div className="dropdown-content">   
                    </div>
                </div>
            </div>
    )
}