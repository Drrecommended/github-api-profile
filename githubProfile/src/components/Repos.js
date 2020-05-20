import React, { useEffect } from 'react';
import '../styles/App.css';
import { useData } from '../hooks'



export default function Repos() {
    const { repos, getRepo } = useData()
    console.log(repos)
    useEffect(() => {
        getRepo()
  }, [])
    return (
        <div className="repos">
            {repos.map(repo => {
              return (
                <div className="repoBorder">
                    <div className="title">{repo.name}</div>
                    <div className="forkedFrom">Forked from Mrsheepsheep/watchparty</div>
                    <div className="description">A Netflix Party clone, but works on Youtube, PrimeVideo, and so on...</div>
                    <div className="stats">
                        <div className="circle"> </div>
                        <div>2</div>
                        <div>Updated 4 days ago</div>
                    </div>
                </div>    
              )
            })}
            </div>
    )
}