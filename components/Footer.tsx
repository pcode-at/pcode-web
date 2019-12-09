import React from 'react';
import { Color } from '../Color.enum';
import { Flex, Box } from 'rebass';
import { CopyText } from './CopyText';

type TFooterProps = {};

export const Footer: React.FC<TFooterProps> = ({}) => {
    return (
        <React.Fragment>
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
                        <CopyText color={Color.Secondary2}>
                            pcode - software engineering
                        </CopyText>
                        <CopyText color={Color.Secondary2}>
                            +43 664 1652141
                        </CopyText>
                        <CopyText color={Color.Secondary2}>
                            office@pcode.at
                        </CopyText>
                    </Box>

                    <div>
                        <CopyText color={Color.Secondary2}>
                            peter-behrens platz 2
                        </CopyText>
                        <CopyText color={Color.Secondary2}>
                            4020 Linz, Austria
                        </CopyText>
                        <CopyText color={Color.Secondary2}>
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
                        <CopyText color={Color.White}>Impressum</CopyText>
                    </a>
                    <a href={DATA_PRIVACY_LINK} target="blank">
                        <CopyText color={Color.White}>Datenschutz</CopyText>
                    </a>
                    <a href={AGB_LINK} target="blank">
                        <CopyText color={Color.White}>AGB</CopyText>
                    </a>
                </Box>
            </Flex>

            <style jsx>{`
                .legal-wrapper {
                    line-height: 1.5em;
                    padding-right: 4em;
                }
                .contact-1-wrapper {
                    margin-right: 1.5em;
                    margin-bottom: 1em;
                }
            `}</style>
        </React.Fragment>
    );
};

const IMPRESSUM_LINK =
    'https://www.wkoecg.at/WEB/Ecg.aspx?FirmaID=d47bddb7-e386-4c13-88c5-2fb80722752d';
const DATA_PRIVACY_LINK = 'https://www.pcode.at/datenschutz/Datenschutz.pdf';
const AGB_LINK = 'https://www.pcode.at/agb/AGB.pdf';
