import React from 'react';
import BubbleSvg from '../assets/bubble.svg?sprite';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
};

export const BubblePortrait: React.FC<Props> = ({
    color = theme.Bubble.Background.Color.Green,
    imageSource = '../static/default-member.png',
    width = '25%',
}) => {

    let BubbleLayout = styled('div', {
        position: 'relative', 
        width: width,    
    })

    let Bubble = styled(BubbleSvg, {
        color: color, 
        position: 'absolute',
        transform: 'rotateZ(-195deg)',
        width: theme.Bubble.Portrait.Background.Width,
    })

    let BubbleImage = styled('img', {
        alt: '',
        maskImage: `url(${'../static/bubble.svg'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: theme.Bubble.Portrait.Mask.Size,
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