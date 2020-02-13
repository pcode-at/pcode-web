import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import { CopyText, FontStyle } from './CopyText';
import styled from 'styled-components';

const { light, normal } = theme.font;

type TPersonWithFunctionProps = {
    color: Color;
    personName: string;
    personPosition: string;
    className?: string;
};

export const PersonWithFunction: React.FC<TPersonWithFunctionProps> = ({
   color,
   className,
    personName,
    personPosition
}) => {

    const PersonWrapper = styled(Box)`
        padding: 1px;
        width: 300px;
    `;

    const StyledPersonFlex = styled(Flex)`
        align-items: center;
        flex-direction: column;
        justify-content: center;
    `;

    const PersonNameWrapper = styled(Box)`
        margin-top: 8%;
        font-size: 130%;
        text-align: center;
    `;

    const PersonPositionWrapper = styled(Box)`
        font-size: 130%;
        text-align: center;
    `;

    return (
        <div className={className}>
            <PersonWrapper
                sx={{
                    '@media screen and (min-width: 615px)': {
                        marginRight: '10%',
                    },
                }}
            >
                <StyledPersonFlex>
                    <PcodeShape color={color} width="80%"/>
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
            </PersonWrapper>
        </div>
    );
};
