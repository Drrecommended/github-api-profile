import React from 'react';
import '../styles/App.css';



export default function Body() {
    return (
        <div className="body">
            <ul className="links">
                <li>Overview</li>
                <li>Repositories</li>
                <li>Projects</li>
                <li>Stars</li>
                <li>Followers</li>
                <li>Following</li>
            </ul>
            <hr className="bar"></hr>
            <div className="inputs">
                <input></input>
                <div class="dropdown">
                    <button className="dropbtn">Type: ALL</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">Language: All</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
            <hr className="barTop"></hr>
        </div>    
        )
}