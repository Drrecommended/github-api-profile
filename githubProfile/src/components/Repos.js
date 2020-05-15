import React from 'react';
import '../styles/App.css';



export default function Repos() {
    return (
        <div className="repos">
                <div className="title">watchparty</div>
                <div className="forkedFrom">Forked from Mrsheepsheep/watchparty</div>
                <div className="description">A Netflix Party clone, but works on Youtube, PrimeVideo, and so on...</div>
                <div className="stats">
                    <div className="circle"> </div>
                    <div>2</div>
                    <div>Updated 4 days ago</div>
                </div>
            </div>
    )
}