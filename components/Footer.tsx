import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { Text } from '../shared/components/Text';
import styled from 'styled-components';
import { theme } from '../theme';

type TFooterProps = {
    className?: string;
};

export const Footer: React.FC<TFooterProps> = ({ className }) => {
    const ContactBoxLayout = styled.div`
        flex-direction: column;
        margin-bottom: ${theme.space[4]};
    `;

    const LinkLayout = styled.div`
        line-height: 150%;

        @media screen and (min-width: ${theme.breakpoints[0]}) {
            padding-left: 0;
        },
    `;

    const FooterLayout = styled(Flex)`
        padding-top: ${theme.space[4]};
        padding-bottom: ${theme.space[4]};
        background-color: ${Color.Secondary};
        flex-direction: column;
        padding-left: ${theme.space[2]};
        padding-right: ${theme.space[2]};

        @media screen and (min-width: ${theme.breakpoints[0]}) {
            justify-content: space-between;
            flex-direction: row;
            padding-left: ${theme.space[4]};
            padding-right: ${theme.space[4]};
        }
    `;
    return (
        <div className={className}>
            <FooterLayout
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
                <ContactBoxLayout>
                    <div>
                        <Text color={Color.Secondary2} variant={'light'}>
                            pcode - software engineering
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            +43 664 1652141
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            office@pcode.at
                        </Text>
                    </div>
                </ContactBoxLayout>

                <ContactBoxLayout>
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
                </ContactBoxLayout>

                <LinkLayout>
                    <div>
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
                    </div>
                </LinkLayout>
            </FooterLayout>
        </div>
    );
};

const IMPRESSUM_LINK =
    'https://www.wkoecg.at/WEB/Ecg.aspx?FirmaID=d47bddb7-e386-4c13-88c5-2fb80722752d';
const DATA_PRIVACY_LINK = 'https://www.pcode.at/datenschutz/Datenschutz.pdf';
const AGB_LINK = 'https://www.pcode.at/agb/AGB.pdf';
