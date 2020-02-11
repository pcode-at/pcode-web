import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


type ProjectSliderProps = {
    images: string[],
    isPhone?: boolean,
    width?: number
};


export const ProjectSlider: React.FC<ProjectSliderProps> = ({
    images,
    isPhone: ip = true,
    width: w = 500,
}) => {

    const divs = [];

    for (const value of images) {
        divs.push(
            <div>
                <img src={value}/>
            </div>);
    }

    return (

        <div style={{ width: w, position: 'relative' }}>

            <div style={{ position: 'absolute' }}>
                <img src="../static/phone.svg" alt="" width={w}/>
            </div>

            <div style={{ paddingTop: '20%', paddingLeft: '3%', paddingRight: '3.5%' }}>
                <Carousel showThumbs={false}>
                    {divs}
                </Carousel>
            </div>
        </div>
    );
};
