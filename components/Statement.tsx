import React from 'react';
import { Color } from '../Color.enum';
import { Text, Box, Flex } from 'rebass';
import { CopyText, FontStyle } from './CopyText';
import { theme } from '../theme';
import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { SectionHeadline } from './SectionHeadline';
import { read } from 'fs';
import { PcodeShape } from './PcodeShape';

type TStatementProps = {
    personName: string;
    personPosition: string;
    color?: Color;
    width?: string;
    backgroundColor?: Color;
    pCodeShapeColor?: Color;
};

const Shape: React.FC<Pick<
    TStatementProps,
    'personName' | 'personPosition' | 'pCodeShapeColor'
>> = ({ personName, personPosition, pCodeShapeColor }) => {
    return (
        <Box // Shape
            sx={{
                maxWidth: 700,
                padding: 1,
                width: '300px',

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
                <PcodeShape color={pCodeShapeColor} width="80%" />
                <Box
                    css={{
                        fontStyle: 'bold',
                        marginTop: '8%',
                        fontSize: '130%',
                    }}
                >
                    <CopyText color={pCodeShapeColor}>{personName}</CopyText>
                </Box>

                <Box
                    css={{
                        fontSize: '130%',
                    }}
                >
                    <CopyText
                        fontStyle={FontStyle.Light}
                        color={pCodeShapeColor}
                    >
                        {personPosition}
                    </CopyText>
                </Box>
            </Flex>
        </Box>
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
}) => {
    const { light, normal } = theme.font;

    return (
        <React.Fragment>
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
                <Flex // Text on Left
                    color={color}
                    sx={{
                        maxWidth: 700,
                        marginLeft: '10%',
                        width: '130%',
                        fontFamily: light.fontFamily,
                        fontWeight: normal.fontWeight,

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
                <Shape
                    personName={personName}
                    personPosition={personPosition}
                    pCodeShapeColor={pCodeShapeColor}
                />
            </Flex>
        </React.Fragment>
    );
};
