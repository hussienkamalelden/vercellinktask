import React, { Component } from 'react';
import { Carousel } from "react-bootstrap"
import "./slider_style.scss"

class Slider extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <article className="slider">
                    <Carousel className="carousel" fade>
                        <Carousel.Item className="carousel-item">
                            <div className="slider-slide-holder">
                                <div className="slider-slide-holder-overlay"></div>
                            </div>
                            <Carousel.Caption className="slider-slide-caption">
                                <h1 className="slider-slide-caption-title">AI Foundation</h1>
                                <p className="slider-slide-caption-content">is focused on inspiring the next generation of kids Healthcare professionals.</p>
                                <a className="slider-slide-caption-link" href="/#">Donate Now</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="slider-slide-holder">
                                <div className="slider-slide-holder-overlay"></div>
                            </div>
                            <Carousel.Caption className="slider-slide-caption">
                                <h1 className="slider-slide-caption-title">AI Foundation</h1>
                                <p className="slider-slide-caption-content">is focused on inspiring the next generation of kids Healthcare professionals.</p>
                                <a className="slider-slide-caption-link" href="/#">Donate Now</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="slider-slide-holder">
                                <div className="slider-slide-holder-overlay"></div>
                            </div>
                            <Carousel.Caption className="slider-slide-caption">
                                <h1 className="slider-slide-caption-title">AI Foundation</h1>
                                <p className="slider-slide-caption-content">is focused on inspiring the next generation of kids Healthcare professionals.</p>
                                <a className="slider-slide-caption-link" href="/#">Donate Now</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </article>
            </React.Fragment>
        );
    }
}

export default Slider;