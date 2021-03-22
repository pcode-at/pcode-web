import React from 'react';

import { DeprecatedColor } from '../Color.enum';
import { themeDeprecated } from '../themeDeprecated';
import styled from 'styled-components';
import { Box } from 'rebass';

type Props = {
    variant: 'Top' | 'Bottom';
    color: DeprecatedColor;
    shape: 1 | 2 | 3 | 4;
    className?: string;
};

export const Wave: React.FC<Props> = ({ variant, color, shape, className }) => {
    let waveLayoutHeight = '4vw';
    let WavePosition = styled(Box)`
        width: 100%;
        height: 4vw;
    `;

    let WaveStyle = styled(Box)`
        width: 100%;
        height: 100%;
        background-color: ${themeDeprecated.colors[color]};
        mask: url(../static/wave1.svg);
        mask-position: top;
        ${variant == 'Top' ? 'transform: scaleY(-1);' : ''}
        mask-repeat: no-repeat;
        mask-size: 100%;
    `;

    switch (shape) {
        case 2:
            WaveStyle = styled(Box)`
                width: 100%;
                height: 100%;
                background-color: ${themeDeprecated.colors[color]};
                mask: url(../static/wave2.svg);
                mask-position: top;
                ${variant == 'Top' ? 'transform: scaleY(-1);' : ''}
                mask-repeat: no-repeat;
                mask-size: 100%;
            `;
            break;
        case 3:
            WavePosition = styled(Box)`
                width: 100%;
                height: 13vw;
            `;

            WaveStyle = styled(Box)`
                width: 100%;
                height: 100%;
                background-color: ${themeDeprecated.colors[color]};
                mask: url(../static/wave3.svg);
                mask-position: bottom;
                ${variant == 'Bottom' ? 'transform: scaleY(-1);' : ''}
                mask-repeat: no-repeat;
                mask-size: 100%;
            `;
            waveLayoutHeight = '13vw';
            break;
        case 4:
            WavePosition = styled(Box)`
                width: 100%;
                height: 45vw;
            `;

            WaveStyle = styled(Box)`
                width: 100%;
                height: 100%;
                background-color: ${themeDeprecated.colors[color]};
                mask: url(../static/wave4.svg);
                mask-position: top;
                ${variant == 'Top'
                    ? 'transform: scaleY(-1);'
                    : 'transform: translateY(-26.8vw);'}
                mask-repeat: no-repeat;
                mask-size: 100%;
            `;
            waveLayoutHeight = '18.2vw';
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
                    <WaveStyle />
                </WavePosition>
            </WaveLayout>
        </div>
    );
};
