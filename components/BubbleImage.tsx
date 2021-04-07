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
    color = theme.Bubble.Background.Color.Blue,
    imageSource = '../static/stock/stock01.jpg',
    // width = '45%',
    width = '570px',
}) => {

    let BubbleImageLayout = styled('div', {
        display: 'flex',
        position: 'relative',
        width: width,
        
    })

    let BubbleLayout = styled('div', {
        position: 'relative',
        width: '100%',

    })

    let Bubble = styled(BubbleSvg, {
        color: color,
        width: '100%',

    })

    let ImageLayout = styled('div', {
        position: 'absolute',
        top: '33px',
        width: '100%',
    })

    let Image = styled('img', {
        maskImage: `url(${'../static/bubble.svg'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: theme.Bubble.Image.Mask.Size,   
        position: 'relative',    
        scale: 'crop',
        width: '100%',

    })

    return (
        <BubbleImageLayout>
            <BubbleLayout>
                <Bubble/>
            </BubbleLayout>
            <ImageLayout>
                <Image src={imageSource}/>
            </ImageLayout>
        </BubbleImageLayout>
    );
}