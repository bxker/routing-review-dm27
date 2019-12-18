import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile Component</h1>
                {this.props.match.params.name === 'jacob' ?
                <h1>Hey {this.props.match.params.name}</h1>
                :
        <h1>Please enter a valid name, {this.props.match.params.name}</h1>}
            <button onClick={() => this.props.history.goBack()}>Go Back</button>
            </div>

        )
    }
}