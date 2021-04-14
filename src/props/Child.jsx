import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h2>Child</h2>
                <p>name: {this.props.tenCauThu} </p>
                <p>number: {this.props.soAo}</p>     
            </div>
        );
    }
}

export default Child;       