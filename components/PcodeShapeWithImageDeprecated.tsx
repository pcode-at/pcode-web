import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import { theme } from '../theme';
import { Bubble } from './Bubble';
import styled from 'styled-components';
import { Flex, Box, Image } from 'rebass';

export type pcodeShapeWithImageVariant = 1 | 2;

type Props = {
    variant: pcodeShapeWithImageVariant,
    imageSource: string;
    color?: DeprecatedColor;
    className?: string;
};

export const PcodeShapeWithImageDeprecated: React.FC<Props> = ({
    color = DeprecatedColor.Primary,
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

    let StyledPcodeShape = styled(Bubble)`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 92%;
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
                    <StyledPcodeShape width="100%" color={color} />
                </PcodeShapeLayout>
                <StyledImageLayout>
                    <StyledImage src={imageSource} />
                </StyledImageLayout>
            </StyledFlexLayout>
        </div>
    );
};
