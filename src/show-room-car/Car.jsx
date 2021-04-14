import React, { Component } from 'react';

class Car extends Component {
    render() {
        const {carImg} = this.props;
        return (
            <div className="car mt-2">
                <img
                    className="img-thumbnail"
                    src={carImg}
                    alt="hinh"
                />
            </div>
        );
    }
}

export default Car;