import React from "react";
import "../styles/HomeSlider.css";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import gif1 from "../assets/HomeSlider1.gif";
import gif2 from "../assets/HomeSlider2.gif";
import gif3 from "../assets/HomeSlider3.gif";
import gif4 from "../assets/HomeSlider4.gif";
import gif5 from "../assets/HomeSlider5.gif";


export const HomeSlider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={14000}>
                <img
                    className="d-block w-100"
                    src={gif1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={14000}>
                <img
                    className="d-block w-100"
                    src={gif2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={14000}>
                <img
                    className="d-block w-100"
                    src={gif3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={14000}>
                <img
                    className="d-block w-100"
                    src={gif4}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={14000}>
                <img
                    className="d-block w-100"
                    src={gif5}
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}