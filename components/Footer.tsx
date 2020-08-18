import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { CopyText, FontStyle } from './CopyText';

type TFooterProps = {
    className?: string;
};

export const Footer: React.FC<TFooterProps> = ({ className }) => {
    return (
        <div className={className}>
            <Flex
                paddingTop="2em"
                paddingBottom="2em"
                backgroundColor={Color.Secondary}
                flexDirection="column"
                sx={{
                    '@media screen and (min-width: 615px)': {
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    },
                }}
            >
                <Flex
                    paddingLeft="2em"
                    flexDirection="column"
                    marginBottom="2em"
                    sx={{
                        '@media screen and (min-width: 615px)': {
                            flexDirection: 'row',
                        },
                    }}
                >
                    <Box
                        sx={{
                            margin: '0 0 1em 0',
                            '@media screen and (min-width: 615px)': {
                                margin: '0 1.5em 1em 0',
                            },
                        }}
                    >
                        <CopyText
                            color={Color.Secondary2}
                            fontStyle={FontStyle.Light}
                        >
                            pcode - software engineering
                        </CopyText>
                        <CopyText
                            color={Color.Secondary2}
                            fontStyle={FontStyle.Light}
                        >
                            +43 664 1652141
                        </CopyText>
                        <CopyText
                            color={Color.Secondary2}
                            fontStyle={FontStyle.Light}
                        >
                            office@pcode.at
                        </CopyText>
                    </Box>

                    <div>
                        <CopyText
                            color={Color.Secondary2}
                            fontStyle={FontStyle.Light}
                        >
                            peter-behrens platz 2
                        </CopyText>
                        <CopyText
                            color={Color.Secondary2}
                            fontStyle={FontStyle.Light}
                        >
                            4020 Linz, Austria
                        </CopyText>
                        <CopyText
                            color={Color.Secondary2}
                            fontStyle={FontStyle.Light}
                        >
                            Axis Coworking loft
                        </CopyText>
                    </div>
                </Flex>

                <Box
                    sx={{
                        paddingLeft: '2em',
                        lineHeight: '1.5em',
                        '@media screen and (min-width: 615px)': {
                            paddingLeft: '0',
                            paddingRight: '4em',
                        },
                    }}
                >
                    <a href={IMPRESSUM_LINK} target="blank">
                        <CopyText
                            color={Color.White}
                            fontStyle={FontStyle.Light}
                        >
                            Impressum
                        </CopyText>
                    </a>
                    <a href={DATA_PRIVACY_LINK} target="blank">
                        <CopyText
                            color={Color.White}
                            fontStyle={FontStyle.Light}
                        >
                            Datenschutz
                        </CopyText>
                    </a>
                    <a href={AGB_LINK} target="blank">
                        <CopyText
                            color={Color.White}
                            fontStyle={FontStyle.Light}
                        >
                            AGB
                        </CopyText>
                    </a>
                </Box>
            </Flex>
        </div>
    );
};

const IMPRESSUM_LINK =
    'https://www.wkoecg.at/WEB/Ecg.aspx?FirmaID=d47bddb7-e386-4c13-88c5-2fb80722752d';
const DATA_PRIVACY_LINK = 'https://www.pcode.at/datenschutz/Datenschutz.pdf';
const AGB_LINK = 'https://www.pcode.at/agb/AGB.pdf';
