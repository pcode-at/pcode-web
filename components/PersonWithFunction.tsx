import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex, Image } from 'rebass';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import styled, { css } from 'styled-components';
import { Text } from '../shared/components/Text';

const { light, normal } = theme.font;

type TPersonWithFunctionProps = {
    color: Color;
    personName: string;
    personPosition: string;
    className?: string;
    imagePath: string;
};

export const PersonWithFunction: React.FC<TPersonWithFunctionProps> = ({
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

    const PersonNameWrapper = styled(Box)`
        margin-top: ${theme.space[3]};
        text-align: center;
    `;

    const PersonPositionWrapper = styled(Box)`
        text-align: center;
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
        margin-left: -${theme.space[3]};
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
                <PersonNameWrapper>
                    <Text color={color} variant={'normal'}>
                        {personName}
                    </Text>
                </PersonNameWrapper>

                <PersonPositionWrapper>
                    <Text color={color} variant={'light'}>
                        {personPosition}
                    </Text>
                </PersonPositionWrapper>
            </PersonWithFunctionLayout>
        </div>
    );
};
