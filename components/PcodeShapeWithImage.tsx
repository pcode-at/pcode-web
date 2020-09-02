import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { PcodeShape } from './PcodeShape';
import styled, { css, breakpoints } from '@xstyled/styled-components';

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
    const StyledFlexLayout = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    `;

    let StyledImage = styled.img`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 92%;
        width: 100%;
    `;

    let StyledImageLayout = styled.div`
        margin-right: 4.9%;
        max-width: 100%;
        position: absolute;
        top: 8%;
        transform: scale(1.08);
    `;

    let PcodeShapeLayout = styled.div`
        width: 100%;
    `;

    if (variant == 'imageRight') {
        StyledImageLayout = styled.div`
            margin-left: 8%;
            margin-right: 0;
            max-width: 100%;
            position: absolute;
            top: 5%;
        `;
        StyledImage = styled.img`
            mask: url(../static/pcode_shape.svg);
            mask-position: top;
            mask-repeat: no-repeat;
            mask-size: 92%;
            width: 100%;
        `;
        PcodeShapeLayout = styled.div`
            margin: 5% 15% 0 0;
            transform: rotateZ(-189deg);
            width: 81%;
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
