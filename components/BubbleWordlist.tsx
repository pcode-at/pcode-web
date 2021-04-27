import React from 'react';
import BubbleWordlistSvg from '../assets/bubble_wordlist.svg?sprite';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    width?: string;
    color?: string;
};

export const BubbleWordlist: React.FC<Props> = ({
    // width = '45%',
    width = '570px',
    color = theme.Bubble.Background.Color.Blue,
}) => {

    let BubbleLayout = styled('div', {
        width: width,
    })

    let Bubble = styled(BubbleWordlistSvg,  {
        width: '100%',
        color: color,
    })

    return (
        <BubbleLayout>
            <Bubble/>
        </BubbleLayout>
    );
}