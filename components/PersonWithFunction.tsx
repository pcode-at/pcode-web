import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex, Image, Text } from 'rebass';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import { CopyText, FontStyle } from './CopyText';
import styled, { css } from 'styled-components';

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

    const PersonWrapper = styled(Box)`
        padding: 1px;
    `;

    const StyledPersonFlex = styled(Flex)`
        align-items: center;
        flex-direction: column;
        justify-content: center;
    `;

    const PersonNameWrapper = styled(Box)`
        margin-top: 2em;
        font-size: 130%;
        text-align: center;
    `;

    const PersonPositionWrapper = styled(Box)`
        font-size: 130%;
        text-align: center;
    `;


    const StyledPersonImageLayout = styled.div`
        margin-left: 1em;
        position: absolute;
        max-width: 300px;
    `;

    const StyledPersonImage = styled(Image)`
        mask: url(../static/pcode_shape.svg);
        mask-position: top;
        mask-repeat: no-repeat;
        mask-size: 70%;
    `;

    return (
        <div className={className}>
                <StyledPersonFlex>
                    <PcodeShape color={color} width="70%"/>

                    <StyledPersonImageLayout>
                        <StyledPersonImage src={imagePath}/>
                    </StyledPersonImageLayout>
                    <PersonNameWrapper>
                        <CopyText color={color} fontStyle={FontStyle.Normal}>
                            {personName}
                        </CopyText>
                    </PersonNameWrapper>

                    <PersonPositionWrapper>
                        <CopyText fontStyle={FontStyle.Light} color={color}>
                            {personPosition}
                        </CopyText>
                    </PersonPositionWrapper>
                </StyledPersonFlex>
        </div>
    );
};
