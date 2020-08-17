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
    const ImageLayout = styled.div`
        position: absolute;
    `;

    const CarouselLayout = styled.div`
        width: ${width};
        padding-top: 20%;
        padding-left: 3%;
        padding-right: 3.5%;
    `;

    return (
        <div className={className}>
            <ImageLayout>
                <img src="../static/phone.svg" alt="" width={width}/>
            </ImageLayout>

            <div style={{ width: width }}>
                <CarouselLayout>
                    <Carousel showThumbs={false}>
                        {divs}
                    </Carousel>
                </CarouselLayout>
            </div>
        </div>
    );
};
