import React from 'react';
import BubbleSvg from '../assets/bubble.svg?sprite';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
};

export const BubbleImage: React.FC<Props> = ({
    width = '45%',
    color = theme.Bubble.Background.Color.Blue,
    imageSource = '../static/memberPortraits/kotek_michael.jpg',
}) => {

    let BubbleLayout = styled('div', {
        width: width,
        position: 'relative',     
    })

    let Bubble = styled(BubbleSvg, {
        color: color, 
        position: 'absolute',
        width: '100%',
        // zIndex: '$regular',

    })

    let BubbleImage = styled('img', {
        alt: '',
        position: 'absolute',
        width: '100%',
        maskImage: `url(${'../static/bubble.svg'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: '90%',

        // TODO: correct positioning of image within bubble
        // top: '2.041rem',
        // bottom: '0.724rem',    
        // zIndex: '$top',
    })

    return (
        <BubbleLayout>
            <Bubble/>
            <BubbleImage src={imageSource}/>
        </BubbleLayout>
    );
}