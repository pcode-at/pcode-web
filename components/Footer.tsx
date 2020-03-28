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
    const ContactAndAddressBoxLayout = styled(Flex)`
        flex-direction: row;
    `;

    const ContactLayout = styled.div`
        @media screen and (min-width: ${theme.breakpoints[0]}) {
            margin-left: ${theme.space[4]};
        }
    `;

    const AddressLayout = styled.div`
        margin-left: ${theme.space[2]};

        @media screen and (min-width: ${theme.breakpoints[0]}) {
            margin-left: ${theme.space[4]};
        }
    `;

    const LinkLayout = styled.div`
        @media screen and (max-width: ${theme.breakpoints[0]}) {
            margin-top: ${theme.space[2]};
        }
    `;

    const FooterLayout = styled(Flex)`
        line-height: 150%;
        padding-top: ${theme.space[4]};
        padding-bottom: ${theme.space[4]};
        background-color: ${Color.Secondary};
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
                <ContactAndAddressBoxLayout>
                    <ContactLayout>
                        <Text color={Color.Secondary2} variant={'light'}>
                            pcode - software engineering
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            +43 664 1652141
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            office@pcode.at
                        </Text>
                    </ContactLayout>

                    <AddressLayout>
                        <Text color={Color.Secondary2} variant={'light'}>
                            peter-behrens platz 2
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            4020 Linz, Austria
                        </Text>
                        <Text color={Color.Secondary2} variant={'light'}>
                            Axis Coworking loft
                        </Text>
                    </AddressLayout>
                </ContactAndAddressBoxLayout>

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
