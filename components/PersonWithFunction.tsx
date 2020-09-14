import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex, Image, Text } from 'rebass';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import { CopyText, FontStyle } from './CopyText';
import styled, { css } from 'styled-components';

const { light, normal } = theme.font;

type Props = {
    color: Color;
    personName: string;
    personPosition: string;
    className?: string;
    imagePath: string;
};

export const PersonWithFunction: React.FC<Props> = ({
    color,
    className,
    personName,
    personPosition,
    imagePath,
}) => {
    const PersonWithFunctionLayout = styled(Flex)`
        align-items: center;
        flex-direction: column;
    `;

    const PersonNameLayout = styled(Box)`
        margin-top: 2em;
        font-size: 130%;
    `;

    const TextPositionStyle = styled(Box)`
        text-align: center;
    `;

    const PersonPositionLayout = styled(Box)`
        font-size: 130%;
    `;

    const StyledPersonImageLayout = styled(Box)`
        position: absolute;
        width: 300px;
    `;

    const StyledPersonImage = styled(Image)`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 70%;
    `;

    const PcodeShapeLayout = styled(Box)`
        position: relative;
        margin-left: -40px;
        transform: rotate(-20deg);
        width: 200px;
    `;
    return (
        <div className={className}>
            <PersonWithFunctionLayout>
                <PcodeShapeLayout>
                    <PcodeShape color={color} />
                </PcodeShapeLayout>
                <StyledPersonImageLayout>
                    <StyledPersonImage src={imagePath} />
                </StyledPersonImageLayout>
                <PersonNameLayout>
                    <TextPositionStyle>
                        <CopyText color={color} fontStyle={FontStyle.Normal}>
                            {personName}
                        </CopyText>
                    </TextPositionStyle>
                </PersonNameLayout>

                <PersonPositionLayout>
                    <TextPositionStyle>
                        <CopyText fontStyle={FontStyle.Light} color={color}>
                            {personPosition}
                        </CopyText>
                    </TextPositionStyle>
                </PersonPositionLayout>
            </PersonWithFunctionLayout>
        </div>
    );
};
