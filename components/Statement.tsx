import React from 'react';
import { Color } from '../Color.enum';
import { Text, Box, Flex } from 'rebass';
import { CopyText, FontStyle } from './CopyText';
import { theme } from '../theme';
import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { SectionHeadline } from './SectionHeadline';
import { read } from 'fs';

type TStatementProps = {
    personName: string;
    personPosition: string;
    color: Color;
    width?: string;
};

export const Statement: React.FC<TStatementProps> = ({
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
                backgroundColor={Color.Secondary2}
                alignItems="center"
                sx={{
                    '@media screen and (min-width: 615px)': {
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    },
                }}
            >
                <Box
                    sx={{
                        maxWidth: 700,
                        marginLeft: '10%',
                        width: '130%',
                        fontFamily: light.fontFamily,
                        fontWeight: normal.fontWeight,
                        color: Color.White,
                        fontSize: '250%',
                    }}
                >
                    <p>{children}</p>
                </Box>

                <Box
                    sx={{
                        maxWidth: 700,
                        padding: 1,
                        width: '300px',
                        marginRight: '10%',
                        color: Color.White,
                    }}
                >
                    <Flex alignItems="center" flexDirection="column">
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
                            <CopyText color={Color.Secondary}>
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
