import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { CopyText, FontStyle } from './CopyText';
import { theme } from '../theme';
import styled from 'styled-components';
import { PcodeShape } from './PcodeShape';

type TStatementProps = {
    personName: string;
    personPosition: string;
    color: Color;
    width?: string;
    className?: string;
};

export const Statement2: React.FC<TStatementProps> = ({
                                                          children,
                                                          personName,
                                                          personPosition,
                                                          width = '100%',
                                                          color = Color.Primary,
                                                          className,
                                                      }) => {
    const { light, normal } = theme.font;

    const Wrapper = styled(Flex)`
        padding-top: 3em;
        padding-bottom: 3em;
        background-color: ${Color.White};
        align-items: center;
    `;

    const TextWrapper = styled(Flex)`
        max-width: 700px;
        margin-left: 10%;
        width: 100%;
        font-family: ${light.fontFamily};
        font-weight: ${normal.fontWeight};
        font-size: 250%;
    `;

    const PersonWrapper = styled(Flex)`
        max-width: 700px;
        padding: 1px;
        width: 300px;
        color: ${Color.White};
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

    const StyledPersonFlex = styled(Flex)`
        align-items: center;
        flex-direction: column;
        justify-content: center;
    `;

    return (
        <div className={className}>
            <Wrapper
                sx={{
                    '@media screen and (min-width: 615px)': {
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    },
                    '@media screen and (max-width: 615px)': {
                        alignItems: 'center',
                        flexDirection: 'column',
                    },
                }}
            >
                <TextWrapper
                    color={Color.Secondary2}
                    sx={{
                        marginLeft: '10%',
                        '@media screen and (max-width: 615px)': {
                            width: '100%',
                            fontSize: '150%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                    }}
                >
                    <p>{children}</p>
                </TextWrapper>

                <PersonWrapper
                    sx={{
                        '@media screen and (min-width: 615px)': {
                            marginRight: '10%',
                        },
                    }}
                >
                    <StyledPersonFlex>
                        <PcodeShape color={Color.Secondary} width="80%"/>
                        <PersonNameWrapper>
                            <CopyText
                                color={Color.Secondary}
                                fontStyle={FontStyle.Normal}
                            >
                                {personName}
                            </CopyText>
                        </PersonNameWrapper>

                        <PersonPositionWrapper>
                            <CopyText
                                fontStyle={FontStyle.Light}
                                color={Color.Secondary}
                            >
                                {personPosition}
                            </CopyText>
                        </PersonPositionWrapper>
                    </StyledPersonFlex>
                </PersonWrapper>
            </Wrapper>
        </div>
    );
};
