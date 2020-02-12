import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { CopyText, FontStyle } from './CopyText';
import { theme } from '../theme';
import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';

type TStatementProps = {
    personName: string;
    personPosition: string;
    color: Color;
    width?: string;
};

export const Statement2: React.FC<TStatementProps> = ({
                                                          children,
                                                          personName,
                                                          personPosition,
                                                          width = '100%',
                                                          color = Color.Primary,
                                                      }) => {
    const { light, normal } = theme.font;

    return (
        <React.Fragment>
            <Flex
                paddingTop="3em"
                paddingBottom="3em"
                backgroundColor={Color.White}
                alignItems="center"
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
                <Flex
                    sx={{
                        maxWidth: 700,
                        marginLeft: '10%',
                        width: '130%',
                        fontFamily: light.fontFamily,
                        fontWeight: normal.fontWeight,
                        color: Color.Secondary2,
                        fontSize: '250%',
                        '@media screen and (max-width: 615px)': {
                            width: '100%',
                            fontSize: '150%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        },
                    }}
                >
                    <p>{children}</p>
                </Flex>

                <Box
                    sx={{
                        maxWidth: 700,
                        padding: 1,
                        width: '300px',
                        color: Color.White,
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
                        <PcodeShapeSvg
                            style={{
                                color: theme.colors[Color.Secondary],
                                width: '80%',
                            }}
                        />
                        <Box
                            css={{
                                fontStyle: 'bold',
                                marginTop: '8%',
                                fontSize: '130%',
                            }}
                        >
                            <CopyText
                                color={Color.Secondary}
                                fontStyle={FontStyle.Light}
                            >
                                {personName}
                            </CopyText>
                        </Box>

                        <Box
                            css={{
                                fontSize: '130%',
                            }}
                        >
                            <CopyText
                                fontStyle={FontStyle.Light}
                                color={Color.Secondary}
                            >
                                {personPosition}
                            </CopyText>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </React.Fragment>
    );
};
