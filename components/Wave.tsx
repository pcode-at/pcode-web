import React from 'react';

import { Color } from '../Color.enum';
import { theme } from '../theme';
import styled from 'styled-components';
import { Box } from 'rebass';

export type waveVariants = 'top' | 'bottom';

export type shapeVariants = 1 | 2 | 3 | 4 | 5;

type Props = {
    variant: waveVariants; // top | bottom
    color: Color;
    shape: shapeVariants;
    className?: string;
};

export const Wave: React.FC<Props> = ({ variant, color, shape, className }) => {
    let waveLayoutHeight = '75px';
    let WavePosition = styled(Box)`
        width: 100%;
        height: 75px;
    `;

    let WaveStyle = styled(Box)`
        width: 100%;
        height: 100%;
        background-color: ${theme.colors[color]};
        mask: url(../static/wave1.svg);
        mask-position: top;
        ${variant == 'top' ? 'transform: scaleY(-1);' : ''}
        mask-repeat: no-repeat;
        mask-size: 100%;
    `;

    switch (shape) {
        case 2:
            WaveStyle = styled(Box)`
                width: 100%;
                height: 100%;
                background-color: ${theme.colors[color]};
                mask: url(../static/wave2.svg);
                mask-position: top;
                ${variant == 'top' ? 'transform: scaleY(-1);' : ''}
                mask-repeat: no-repeat;
                mask-size: 100%;
            `;
            break;
        case 3:
            WavePosition = styled(Box)`
                width: 100%;
                height: 200px;
            `;

            WaveStyle = styled(Box)`
                width: 100%;
                height: 100%;
                background-color: ${theme.colors[color]};
                mask: url(../static/wave3.svg);
                mask-position: bottom;
                ${variant == 'bottom' ? 'transform: scaleY(-1);' : ''}
                mask-repeat: no-repeat;
                mask-size: 100%;
            `;
            waveLayoutHeight = '200px';
            break;
        case 4:
            WavePosition = styled(Box)`
                width: 100%;
                height: 850px;
            `;

            WaveStyle = styled(Box)`
                width: 100%;
                height: 100%;
                background-color: ${theme.colors[color]};
                mask: url(../static/wave4.svg);
                mask-position: top;
                ${variant == 'top'
                    ? 'transform: scaleY(-1);'
                    : 'transform: scaleY(1) translateY(-517px);'}
                mask-repeat: no-repeat;
                mask-size: 100%;
            `;
            waveLayoutHeight = '333px';
            break;
    }

    const WaveLayout = styled(Box)`
        width: 100%;
        height: ${waveLayoutHeight};
        overflow: hidden;
    `;

    return (
        <div className={className}>
            <WaveLayout>
                <WavePosition>
                    <WaveStyle></WaveStyle>
                </WavePosition>
            </WaveLayout>
        </div>
    );
};
