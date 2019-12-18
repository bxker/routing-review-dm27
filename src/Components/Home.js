import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            name: ''
        }
    }

    updateName=(val)=>{
        this.setState({
            name: val
        })
    }

    render() {
        return (
            <div>
                <h1>Home Component</h1>
                <input onChange={(e) => this.updateName(e.target.value)}></input>
                <Link to="/about">About</Link>
                <Link to={`/profile/${this.state.name}`}>Profile</Link>
            </div>
        )
    }
}
