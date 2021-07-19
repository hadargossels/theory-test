import React, { Component } from 'react'
import './qustion.css'

export class qustion extends Component {
    render() {
        return (
            <div className="background">
                <form className="form">
                    <div className="Qdiv">
                    <p>שאלה</p><br/>
                    <p>text</p>
                  <label htmlFor="ans1">text</label>
                  <input type="radio" id="ans1" name="answer"/>
                  <br/>
                <label htmlFor="ans2">text</label>
                  <input type="radio" id="ans2" name="answer"/>
                  <br/>
                <label htmlFor="ans3">text</label>
                  <input type="radio" id="ans3" name="answer"/>
                  <br/>
                <label htmlFor="ans4">text</label>
                  <input type="radio" id="ans4" name="answer"/>
                  <br/>
                    </div>

                <input type="submit" value="בדוק"/>
                </form>
            </div>
        )
    }
}

export default qustion
