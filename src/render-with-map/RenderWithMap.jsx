import React, { Component } from 'react';

class RenderWithMap extends Component {

    state = {
        listMusic: [
            {
                author: 'binZ',
                music: 'Big City Boy',
            },
            {
                author: 'Hollie Beadell',
                music: 'Small City Girl',
            },
            {
                author: 'Sơn Tùng MTP',
                music: 'Chạy ngay đi',
            },
        ],
    };

    renderListMusic = () => {
        return this.state.listMusic.map((baiHat, index) => {
            return (
                <li key={index}>
                    {baiHat.music} - {baiHat.author}
                </li>
            );
        });
    };

    render() {
        return (
            <div>
                <h1>Danh Sách Bài Hát</h1>
                <ul style={{listStyle: 'none'}}>
                    {this.renderListMusic()}
                </ul>
            </div>
        );
    }
}

export default RenderWithMap;