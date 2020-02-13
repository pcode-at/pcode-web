import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';


type ProjectSliderProps = {
    images: string[],
    isPhone?: boolean,
    width?: number,
    className?: string,
};


export const ProjectSlider: React.FC<ProjectSliderProps> = ({
    images,
    isPhone = true,
    width = 500,
    className,
}) => {

    const divs = [];

    for (const value of images) {
        divs.push(
            <div key={value}>
                <img src={value}/>
            </div>);
    }

    {/*TODO: Fix positioning and width*/}
    const ImageWrapper = styled.div`
        position: absolute;
    `;

    const CarouselWrapper = styled.div`
        width: ${width};
        padding-top: 20%;
        padding-left: 3%;
        padding-right: 3.5%;
    `;

    return (
        <div className={className}>
            <ImageWrapper>
                <img src="../static/phone.svg" alt="" width={width}/>
            </ImageWrapper>

            <div style={{ width: width }}>
                <CarouselWrapper>
                    <Carousel showThumbs={false}>
                        {divs}
                    </Carousel>
                </CarouselWrapper>
            </div>
        </div>
    );
};
