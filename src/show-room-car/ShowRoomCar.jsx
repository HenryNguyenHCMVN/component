import React, { Component } from "react";
import BtnColor from "./BtnColor";
import Car from "./Car";

class ShowRoomCar extends Component {

    // không gọi biến imgSrc vì không render lại dưới UI
    // imgSrc = "./img/car/products/black-car.jpg";

    state = {
        carImg: "./img/car/products/black-car.jpg",
        btnChoiceColorList: [
            {
                name: "1",
                imgSrc: "./img/car/icons/icon-black.jpg",
            },
            {
                name: "2",
                imgSrc: "./img/car/icons/icon-red.jpg",
            },
            {
                name: "3",
                imgSrc: "./img/car/icons/icon-silver.jpg",
            },
            {
                name: "4",
                imgSrc: "./img/car/icons/icon-steel.jpg",
            }, 
        ],
    };

    renderBtnChoiceColorList = () => {
        return this.state.btnChoiceColorList.map((btn, index) => {
            return (
                <BtnColor key={index} btn={btn} handleClick={this.handleClick} />
            );
        });
    };

    handleClick = (color) => {
        let urlImage = "";

        switch (color) {
            case "1":
                urlImage = "./img/car/products/black-car.jpg"
                break;
            case "2":
                urlImage = "./img/car/products/red-car.jpg"
                break;
            case "3":
                urlImage = "./img/car/products/silver-car.jpg"
                break;
            case "4":
                urlImage = "./img/car/products/steel-car.jpg"
                break;
            default:
                break;
        }
        this.setState({
            imgSrc: urlImage,
        });
    }
    render() {

        return (
            <section className="show-room">
                <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
                <div className="container">
                    <div className="chose__color d-flex justify-content-around">
                        {this.renderBtnChoiceColorList()}
                    </div>
                    <Car carImg={this.state.imgSrc} />
                </div>
            </section>
        );
    }
}

export default ShowRoomCar;