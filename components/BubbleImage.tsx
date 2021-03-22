import React from 'react';
import { width } from 'styled-system';
import BubbleSvg from '../assets/bubble.svg?sprite';
import { Color } from '../Color.enum';
import { styled } from '../stitches.config';
import { theme } from '../theme';
import { Image } from 'rebass';

type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
};

export const BubbleImage: React.FC<Props> = ({
    width = '45%',
    color = theme.Bubble.Background.Color.Green,
    imageSource = '../static/kotek_michael.png',
}) => {

    let BubbleLayout = styled('div', {
        width: width,
        // width: theme.Bubble.Image.Width,
    })

    let Bubble = styled(BubbleSvg, {
        zIndex: '$regular',
        color: color, 
        width: '100%',

    })

    let BubbleImage = styled(Image, {
        zIndex: '$higher',
        width: '100%',
        // maskImage: '../assets/bubble.svg?sprite',
        maskSize: '90%',
        mask: '../assets/bubble.svg?sprite', 
        maskRepeat: 'no-repeat',
    })

    return (
        <BubbleLayout>
            <Bubble/>
            <BubbleImage src={imageSource}/>
        </BubbleLayout>
    );
}