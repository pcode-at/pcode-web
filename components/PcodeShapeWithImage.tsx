import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import styled from 'styled-components';
import { Flex, Image, Box } from 'rebass';

type TPcodeShapeWithImage = {
    imageSource: string;
    variant: number;
    color?: Color;
    className?: string;
};

export const PcodeShapeWithImage: React.FC<TPcodeShapeWithImage> = ({
    color = Color.Primary,
    variant,
    imageSource,
    className,
}) => {
    const StyledFlex = styled(Flex)`
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
    `;

    let StyledImage = styled(Image)`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 70%;
    `;

    let StyledImageLayout = styled.div`
        margin-left: 1rem;
        position: absolute;
        max-width: 96%;
        top: 4%;
    `;

    let PcodeShapeLayout = styled(Box)`
        width: 70%;
    `;

    if(variant == 2) {
        StyledImageLayout = styled.div`
            margin-right: 2%;
            position: absolute;
            max-width: 51%;
            top: -1%;
        `;
        StyledImage = styled(Image)`
            mask: url(../static/pcode_shape.svg);
            mask-position: top;
            mask-repeat: no-repeat;
            mask-size: 92%;
        `;
        PcodeShapeLayout = styled(Box)`
            transform: rotateZ(-195deg);
            margin-right: 15%;
        `;
    }
    return (
        <div className={className}>
            <StyledFlex>
                <PcodeShapeLayout>
                    <PcodeShape width="100%" color={color} />
                </PcodeShapeLayout>
                <StyledImageLayout>
                    <StyledImage src={imageSource} />
                </StyledImageLayout>
            </StyledFlex>
        </div>
    );
};
