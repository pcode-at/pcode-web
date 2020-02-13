import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { CopyText, FontStyle } from './CopyText';
import { theme } from '../theme';
import { PcodeShape } from './PcodeShape';
import styled from 'styled-components';

type TStatementProps = {
    personName: string;
    personPosition: string;
    color?: Color;
    backgroundColor?: Color;
    pCodeShapeColor?: Color;
    className?: string;
};

export const Statement: React.FC<TStatementProps> = ({
     children,
     personName,
     personPosition,
     color = Color.White,
     backgroundColor = Color.Secondary2,
     pCodeShapeColor = Color.Secondary,
     className,
 }) => {
    const { light, normal } = theme.font;

    const Wrapper = styled(Flex)`
        padding-top: 3em;
        padding-bottom: 3em;
        align-items: center;
    `;

    const TextWrapper = styled(Flex)`
        max-width: 700px;
        width: 100%;
        margin-left: 10%;
        font-family: ${light.fontFamily};
        font-weight: ${normal.fontWeight};
        font-size: 250%;
        color: ${color};
        @media screen and (max-width: 615px) {
            align-items: center;
            flex-direction: column;
            padding-top: 1em;                        
            padding-bottom: 1em;
        }
    `;

    const PersonWrapper = styled(Box)`
    padding: 1px;
    width: 300px;
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
                backgroundColor={backgroundColor}
                sx={{
                    '@media screen and (min-width: 615px)': {
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    },
                    '@media screen and (max-width: 615px)': {
                        alignItems: 'center',
                        flexDirection: 'column',
                        paddingTop: '1em',
                        paddingBottom: '1em',
                    },
                }}
            >
                <TextWrapper
                    sx={{
                        /*TODO: Attributes from underneath won't be rendered when only written into the styled component*/
                        marginLeft: '10%',
                        '@media screen and (max-width: 615px)': {
                            width: '90%',
                            fontSize: '150%',
                            textAlign: 'center',
                            marginRight: '10%',
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
                        <PcodeShape color={pCodeShapeColor} width="80%"/>
                        <PersonNameWrapper>
                            <CopyText
                                color={pCodeShapeColor}
                                fontStyle={FontStyle.Normal}
                            >
                                {personName}
                            </CopyText>
                        </PersonNameWrapper>

                        <PersonPositionWrapper>
                            <CopyText
                                fontStyle={FontStyle.Light}
                                color={pCodeShapeColor}
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
