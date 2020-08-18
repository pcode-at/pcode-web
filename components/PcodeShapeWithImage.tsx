import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import styled from 'styled-components';
import { Flex, Image } from 'rebass';

type Props = {
    color?: Color;
    className?: string;
};

export const PcodeShapeWithImage: React.FC<Props> = ({
    color = Color.Primary,
    className,
}) => {
    const StyledFlex = styled(Flex)`
        align-items: center;
        flex-direction: column;
        justify-content: center;
    `;

    const StyledImageLayout = styled.div`
        margin-left: 1em;
        position: absolute;
        max-width: 300px;
    `;

    const StyledImage = styled(Image)`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 50%;
    `;
    return (
        <div className={className}>
            <StyledFlex>
                <PcodeShape width="70%" />
                <StyledImageLayout>
                    <StyledImage src="../static/sandburg.jpg" />
                </StyledImageLayout>
            </StyledFlex>
        </div>
    );
};
