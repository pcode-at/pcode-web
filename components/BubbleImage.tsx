import React from 'react';
import { width } from 'styled-system';
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
    width = '55%',
    // width = '570px', 
    
}) => {

    let BubbleImageLayout = styled('div', {
        width: width,
        position: 'relative',
        display: 'flex',
        
    })

    let BubbleLayout = styled('div', {
        width: '100%',
        position: 'relative',
    })

    let Bubble = styled(BubbleSvg, {
        color: color,
        width: '100%',

    })

    let ImageLayout = styled('div', {
        width: '100%',
        position: 'absolute',
        // display: 'flex',
        top: '33px',
        
    })

    let Image = styled('img', {
        maskImage: `url(${'../static/bubble.svg'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: theme.Bubble.Image.Mask.Size,
        width: '100%',   
        position: 'relative',    
        scale: 'crop',

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