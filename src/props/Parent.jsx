import React, { Children, Component } from 'react';
import Child from './Child';

class Parent extends Component {

    state = {
        name: 'Ronaldo',
        number: '7',
    };

    render() {
        return (
            <div>
                <h1>Demo Props</h1>
                <Child tenCauThu={this.state.name} soAo={this.state.number}/>
            </div>
        );
    }
}

export default Parent;