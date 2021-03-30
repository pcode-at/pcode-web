import React from 'react';
import BubbleSvg from '../static/bubble.svg?sprite';
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
    imageSource = '../static/stock01.jpg', 
}) => {

    // TODO: correct positioning of image within bubble
    
    let BubbleLayout = styled('div', {
        width: width,
        position: 'relative',
    })

    let Bubble = styled(BubbleSvg, {
        color: color, 
        position: 'absolute',
        width: '100%',
    })

    let BubbleImage = styled('img', {
        alt: '',
        position: 'relative',
        width: theme.Bubble.Image.Background.Width,
        maskImage: `url(${'../static/bubble.svg'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: theme.Bubble.Image.Mask.Size,
    })

    return (
        <BubbleLayout>
            <Bubble/>
            <BubbleImage src={imageSource}/>
        </BubbleLayout>
    );
}