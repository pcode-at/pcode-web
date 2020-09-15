import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import styled from 'styled-components';
import { Flex, Box, Image } from 'rebass';

type Props = {
    variant: 1 | 2,
    imageSource: string;
    color?: Color;
    className?: string;
};

export const PcodeShapeWithImage: React.FC<Props> = ({
    color = Color.Primary,
    variant,
    imageSource,
    className,
}) => {
    const StyledFlexLayout = styled(Flex)`
        align-items: center;
        flex-direction: column;
        justify-content: center;
        position: relative;
    `;

    let StyledImageLayout = styled.div`
        margin-right: 4.9%;
        position: absolute;
        max-width: 71%;
        top: 5%;
    `;

    let PcodeShapeLayout = styled(Box)`
        width: 70%;
    `;
    
    let StyledImage = styled(Image)`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 92%;
    `;

    if (variant == 2) {
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
            <StyledFlexLayout>
                <PcodeShapeLayout>
                    <PcodeShape width="100%" color={color} />
                </PcodeShapeLayout>
                <StyledImageLayout>
                    <StyledImage src={imageSource} />
                </StyledImageLayout>
            </StyledFlexLayout>
        </div>
    );
};
