import React from 'react';
import BubbleSvg from '../assets/bubble.svg?sprite';
import BubbleCenteredSvg from '../static/bubble_centered.svg?sprite';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
};

export const BubblePortrait: React.FC<Props> = ({
    width = '45%',
    color = theme.Bubble.Background.Color.Green,
    imageSource = '../static/memberPortraits/kotek_michael.jpg',
}) => {

    let BubbleLayout = styled('div', {
        position: 'relative', 
        width: width,    
    })

    let Bubble = styled(BubbleSvg, {
        color: color, 
        position: 'absolute',
        width: '87%',
        transform: 'rotateZ(-195deg)',
    })

    let BubbleImage = styled('img', {
        alt: '',
        maskImage: `url(${'../static/bubble.svg'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: '90%',
        position: 'relative',
        width: '100%',
    })

    return (
        <BubbleLayout>
            <Bubble/>
            <BubbleImage src={imageSource}/>
        </BubbleLayout>
    );
}