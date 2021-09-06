import React from "react";
import "../styles/HomeSlider.css";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

// import gif1 from "../assets/HomeSlider1.gif";
// import gif2 from "../assets/HomeSlider2.gif";
// import gif3 from "../assets/HomeSlider3.gif";
// import gif4 from "../assets/HomeSlider4.gif";
// import gif5 from "../assets/HomeSlider5.gif";


export const HomeSlider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1400}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1400}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3837494/pexels-photo-3837494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1400}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3690005/pexels-photo-3690005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1400}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/2902541/pexels-photo-2902541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1400}>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/2910457/pexels-photo-2910457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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