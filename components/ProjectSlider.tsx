import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from '@xstyled/styled-components';

type Props = {
    images: string[];
    isPhone?: boolean;
    width?: number;
    className?: string;
};

export const ProjectSlider: React.FC<Props> = ({
    images,
    isPhone = true,
    width = 500,
    className,
}) => {
    const divs = [];

    for (const value of images) {
        divs.push(
            <div key={value}>
                <img src={value} />
            </div>,
        );
    }

    const ImageWrapper = styled.div`
        position: absolute;
    `;

    const CarouselWrapper = styled.div`
        box-sizing: border-box;
        padding-left: 3%;
        padding-right: 3.5%;
        padding-top: 20%;
        width: ${width};
    `;

    return (
        <div className={className}>
            <ImageWrapper>
                <img src="../static/phone.svg" alt="" width={width} />
            </ImageWrapper>

            <div style={{ width: width }}>
                <CarouselWrapper>
                    <Carousel showThumbs={false}>{divs}</Carousel>
                </CarouselWrapper>
            </div>
        </div>
    );
};
