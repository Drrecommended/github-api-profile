import React from 'react';
import '../styles/App.css';



export default function Sidebar() {
    return (
        <div className="leftSidebar">
            <img className="profilePhoto" src="http://placehold.it/250x250" alt="place"></img>
            <div className="name">Michael Sweeney</div>
            <div className="userName">overthemike</div>
            <button className="button">Unfollow</button>
            <div className="flex1">
                <div>star</div>
                <div className="purpleBox">
                    <div>PRO</div>
                </div>
            </div>
            <div>Block or report user</div>
        </div>
    )
}