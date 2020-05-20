import React, { useState, useEffect} from 'react';
import '../styles/App.css';
import { useData } from '../hooks'


export default function Links() {
    const { repos, getRepo } = useData()
    console.log(repos)
    useEffect(() => {
        getRepo()
  }, [])
    return (
        <div className="body">
            <ul className="links">
                <li>Overview</li>
                <li className="linkFlex">Repositories
                    <div className="count">
                        {repos.length}
                    </div>
                </li>
                <li>Projects</li>
                <li>Stars</li>
                <li>Followers</li>
                <li>Following</li>
            </ul>
        </div>    
        )
}