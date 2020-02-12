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
    width?: string;
    backgroundColor?: Color;
    pCodeShapeColor?: Color;
    className?: string;
};

const ShapeBox = styled(Box)`
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

const Shape: React.FC<Pick<TStatementProps,
    'personName' | 'personPosition' | 'pCodeShapeColor'>> = ({
                                                                 personName,
                                                                 personPosition,
                                                                 pCodeShapeColor,
                                                             }) => {
    return (
        <ShapeBox
            sx={{
                '@media screen and (min-width: 615px)': {
                    marginRight: '10%',
                },
            }}
        >
            <Flex
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
            >
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
            </Flex>
        </ShapeBox>
    );
};

export const Statement: React.FC<TStatementProps> = ({
     children,
     personName,
     personPosition,
     width = '100%',
     color = Color.White,
     backgroundColor = Color.Secondary2,
     pCodeShapeColor = Color.Secondary,
     className,
 }) => {
    const { light, normal } = theme.font;

    const TextWrapper = styled(Flex)`
        max-width: 700px;
        width: 100%;
        margin-left: 10%;
        font-family: ${light.fontFamily};
        font-weight: ${normal.fontWeight};
        font-size: 250%;
        @media screen and (max-width: 615px) {
            align-items: center;
            flex-direction: column;
            padding-top: 1em;                        
            padding-bottom: 1em;
        }
    `;

    return (
        <div className={className}>
            <Flex
                paddingTop="3em"
                paddingBottom="3em"
                backgroundColor={backgroundColor}
                alignItems="center"
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
                <Flex
                    color={color}
                    sx={{
                        maxWidth: 700,
                        width: '100%',
                        marginLeft: '10%',
                        fontFamily: light.fontFamily,
                        fontWeight: normal.fontWeight,

                        fontSize: '250%',
                        '@media screen and (max-width: 615px)': {
                            width: '90%',
                            fontSize: '150%',
                            textAlign: 'center',
                            marginRight: '10%',
                        },
                    }}
                >
                    <p>{children}</p>
                </Flex>
                <Shape
                    personName={personName}
                    personPosition={personPosition}
                    pCodeShapeColor={pCodeShapeColor}
                />
            </Flex>
        </div>
    );
};
