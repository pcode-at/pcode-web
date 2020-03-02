import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { Text } from '../shared/components/Text';

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
                    '@media screen and (min-width: ${theme.breakpoints[0]})': {
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
                        '@media screen and (min-width: ${theme.breakpoints[0]})': {
                            flexDirection: 'row',
                        },
                    }}
                >
                    <Box
                        sx={{
                            margin: '0 0 1em 0',
                            '@media screen and (min-width: ${theme.breakpoints[0]})': {
                                margin: '0 1.5em 1em 0',
                            },
                        }}
                    >
                        <Text color={Color.Secondary2} variant={'light'}>
                            pcode - software engineering
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            +43 664 1652141
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            office@pcode.at
                        </Text>
                    </Box>

                    <div>
                        <Text color={Color.Secondary2} variant={'light'}>
                            peter-behrens platz 2
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            4020 Linz, Austria
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            Axis Coworking loft
                        </Text>
                    </div>
                </Flex>

                <Box
                    sx={{
                        paddingLeft: '2em',
                        lineHeight: '1.5em',
                        '@media screen and (min-width: ${theme.breakpoints[0]})': {
                            paddingLeft: '0',
                            paddingRight: '4em',
                        },
                    }}
                >
                    <a href={IMPRESSUM_LINK} target="blank">
                        <Text color={Color.White} variant={'light'}>
                            Impressum
                        </Text>
                    </a>
                    <a href={DATA_PRIVACY_LINK} target="blank">
                        <Text color={Color.White} variant={'light'}>
                            Datenschutz
                        </Text>
                    </a>
                    <a href={AGB_LINK} target="blank">
                        <Text color={Color.White} variant={'light'}>
                            AGB
                        </Text>
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
