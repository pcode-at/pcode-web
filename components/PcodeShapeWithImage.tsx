import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import styled from 'styled-components';
import { Flex, Image, Box } from 'rebass';

export type PcodeShapeWithImageVariant = 'imageLeft' | 'imageRight';

type Props = {
    imageSource: string;
    variant: PcodeShapeWithImageVariant;
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

    let StyledImage = styled(Image)`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 92%;
    `;

    let StyledImageLayout = styled.div`
        margin-right: 4.9%;
        transform: scale(1.08);
        position: absolute;
        max-width: 100%;
        top: 8%;
    `;

    let PcodeShapeLayout = styled(Box)`
        width: 100%;
    `;

    if (variant == 'imageRight') {
        StyledImageLayout = styled.div`
            margin-right: 0;
            position: absolute;
            max-width: 100%;
            top: 5%;
            margin-left: 8%;
        `;
        StyledImage = styled(Image)`
            mask: url(../static/pcode_shape.svg);
            mask-position: top;
            mask-repeat: no-repeat;
            mask-size: 92%;
        `;
        PcodeShapeLayout = styled(Box)`
            transform: rotateZ(-189deg);
            width: 81%;
            margin: 5% 15% 0 0;
        `;
    }
    return (
        <div className={className}>
            <StyledFlexLayout>
                <PcodeShapeLayout>
                    <PcodeShape color={color} />
                </PcodeShapeLayout>
                <StyledImageLayout>
                    <StyledImage src={imageSource} />
                </StyledImageLayout>
            </StyledFlexLayout>
        </div>
    );
};
