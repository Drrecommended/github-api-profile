import React, { useState, useEffect} from 'react';
import '../styles/App.css';
import { useData } from '../hooks'



export default function Sidebar() {
    const { myGit, getProfile } = useData()
    useEffect(() => {
          getProfile()
    }, [])
    return (
        <div className="leftSidebar">
            <img className="profilePhoto" src={myGit.avatar_url} alt="place"></img>
            <div className="name">{myGit.name}</div>
            <div className="userName">{myGit.login}</div>
            <button className="button">Follow</button>
            <div className="local">{myGit.location}</div>
            <div className="flex1">
                <div className="star">☆</div>
                <div className="purpleBox">
                    <div>PRO</div>
                </div>
            </div>
            <div className="block">Block or report user</div>
        </div>
    )
}