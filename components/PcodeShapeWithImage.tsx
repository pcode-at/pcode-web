import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import styled from 'styled-components';
import { Flex, Image } from 'rebass';

type TPcodeShapeWithImage = {
    imageSource: string;
    color?: Color;
    className?: string;
};

export const PcodeShapeWithImage: React.FC<TPcodeShapeWithImage> = ({
    color = Color.Primary,
    imageSource,
    className,
}) => {
    const StyledFlex = styled(Flex)`
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
    `;

    const StyledImageLayout = styled.div`
        margin-left: 1em;
        position: absolute;
        max-width: 96%;
        top: 4%
    `;

    const StyledImage = styled(Image)`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 70%;
    `;
    return (
        <div className={className}>
            <StyledFlex>
                <PcodeShape width="70%" color={color} />
                <StyledImageLayout>
                    <StyledImage src={imageSource} />
                </StyledImageLayout>
            </StyledFlex>
        </div>
    );
};
