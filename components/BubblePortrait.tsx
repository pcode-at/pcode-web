import React from 'react';
import { BubbleImage } from './BubbleImage';
import { styled } from '../stitches.config';

type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
    position?: 'left' | 'right';
};

export const BubblePortrait: React.FC<Props> = ({
    color = 'tertiary',
    imageSource = '../static/default-member.png',
    width = '228px',
    position = 'right',
}) => {

    let BubbleLayout = styled('div', {
        position: 'relative', 
        width: width,    
    })

    return (
        <BubbleLayout>
            <BubbleImage 
                color={color}
                width={width}
                imageSource={imageSource} 
                position={position}
            />
        </BubbleLayout>
    );
}