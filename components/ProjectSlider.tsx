import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box } from 'rebass';
 
type ProjectSliderProps = {
    images: string[],
    width?: number,
    height?: number 
};


export const ProjectSlider: React.FC<ProjectSliderProps> = ({
    images,
    width: w = 600,
    height: h = 400,
}) => {

    const divs = []

    for (const value of images) {
      divs.push(
        <div>
            <img src={value} />
        </div>)
    }

    //<p className="legend">Legend 2</p>

    return (
        <div style={{height: h, width: w}}>
            <Carousel
            showThumbs={false}>
                {divs}
            </Carousel>
        </div>
    );
};
 



/*export const DemoCarousel: () => {
    return (
        <Carousel>
            <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));*/