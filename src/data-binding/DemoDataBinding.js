import React, { Component } from 'react';

class DemoDataBinding extends Component {
    name = 'yasuo';
    level = 16;
    say = 'hasagi';
    imageSrc = "https://i.pinimg.com/originals/d2/43/72/d243720372a19f7d082034e35e497602.jpg";


    renderInfo = () => {
        return (
            <div>
                <p>name: {this.name}</p>
                <p>level: {this.level}</p>
                <p>say: {this.say}</p>
                <img src={this.imageSrc} />
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>Demo Data Binding</h1>
                {this.renderInfo ()}
            </div>
        );
    }
}

export default DemoDataBinding;