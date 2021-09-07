import React from "react";
import "../styles/HomeSlider.css";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import gif1 from "../assets/HomeSlider1.gif";
import gif2 from "../assets/HomeSlider2.gif";
import gif3 from "../assets/HomeSlider3.gif";
import gif4 from "../assets/HomeSlider4.gif";
import gif5 from "../assets/HomeSlider5.gif";
import gif6 from "../assets/HomeSlider6.gif";
import gif7 from "../assets/HomeSlider7.gif";


export const HomeSlider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={9000}>
                <img
                    className="d-block homeSliderContainer"
                    src={gif1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
                <img
                    className="d-block homeSliderContainer"
                    src={gif2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
                <img
                    className="d-block homeSliderContainer"
                    src={gif3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
                <img
                    className="d-block homeSliderContainer"
                    src={gif4}
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
                <img
                    className="d-block homeSliderContainer"
                    src={gif5}
                    alt="Fifth slide"
                />
                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
                <img
                    className="d-block homeSliderContainer"
                    src={gif6}
                    alt="Sixth slide"
                />
                <Carousel.Caption>
                    <h3>Sixth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={9000}>
                <img
                    className="d-block homeSliderContainer"
                    src={gif7}
                    alt="Seventh slide"
                />
                <Carousel.Caption>
                    <h3>Seventh slide label test</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}