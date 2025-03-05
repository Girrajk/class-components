import React, { Component } from 'react'

export default class Student extends Component {

    constructor() {
        super()
        this.state = {
            name: "Preshant"
        };

    }

    changeName = () => {
        this.setState({
            name: "Chirag",
        });
    };

    render() {
        return (
            <div>
                <p>
                    <b>Student Name: </b>{this.state.name}
                </p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}
