import React from 'react';

import { Color } from '../Color.enum';
import { theme } from '../theme';
import styled from 'styled-components';
import { Box } from 'rebass';

type TWaveProps = {
    variant: string; // top | bottom
    color: Color;
    shape: number; //1 | 2 ...
    className?: string;
};

export const Wave: React.FC<TWaveProps> = ({
    variant,
    color,
    shape,
    className,
}) => {
    const WaveLayout = styled(Box)`
        width: 100%;
        height: 300px;
    `;

    const WavePosition = styled(Box)`
        position: absolute;
        left: -25%;
        width: 100%;
        height: 300px;
    `;

    const WaveStyle = styled(Box)`
        width: 100%;
        height: 100%;
        background-color: ${theme.colors[color]};
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 300%;
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
