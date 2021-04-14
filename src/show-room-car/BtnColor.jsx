import React, { Component } from 'react';

class BtnColor extends Component {
    render() {
        const { btn, handleClick } = this.props;
        return (
            <button className="btn" onClick={() => handleClick(btn.name)}>
                <img src={btn.imgSrc} alt="hinh" style={{ width: 50 }} />
            </button>
        );
    }
}

export default BtnColor;