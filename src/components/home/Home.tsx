import React, { Component } from 'react'
import './home.css'

export class Home extends Component {
    
    render() {
        return (
            <div className="background">
                <div className="homediv">
                    <span className="header">תיאוריה אונליין</span><br/>
                    <img className="Llogo" src="" alt="logo"/><br/>
                    <button className="start">התחל מבחן</button>
                </div>
            </div>
            
        )
    }
}

export default Home
