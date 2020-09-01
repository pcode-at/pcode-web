import React from 'react';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';
import styled, { css, breakpoints } from '@xstyled/styled-components';
import { theme } from '../theme';

type Props = {
    className?: string;
};

export const Footer: React.FC<Props> = ({ className }) => {
    const FooterLayout = styled.div(
        breakpoints({
            allDevices: css`
                padding: extraLarge;
                background-color: ${theme.colors[Color.Secondary]};
                display: flex;
                flex-direction: column;
            `,
            tablet: css`
                justify-content: space-between;
                flex-direction: row;
            `,
        }),
    );

    const FirstColumnLayout = styled.div(
        breakpoints({
            allDevices: css`
                flex-direction: column;
            `,
            tablet: css`
                flex-direction: row;
            `,
        }),
    );

    const ContactBoxLayout = styled.div(
        breakpoints({
            allDevices: css`
                margin: 0 0 large 0;
                display: inline-block;
            `,
            tablet: css`
                margin: 0 extraLarge 0 0;
            `,
        }),
    );

    const SecondColumnLayout = styled.div(
        breakpoints({
            allDevices: css`
                padding-left: large;
                line-height: normal;
            `,
            tablet: css`
                padding-left: 0;
                padding-right: extraLarge;
            `,
        }),
    );

    return (
        <div className={className}>
            <FooterLayout>
                <FirstColumnLayout>
                    <ContactBoxLayout>
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
                    </ContactBoxLayout>

                    <ContactBoxLayout>
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
                    </ContactBoxLayout>
                </FirstColumnLayout>

                <SecondColumnLayout>
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
                </SecondColumnLayout>
            </FooterLayout>
        </div>
    );
};

const IMPRESSUM_LINK =
    'https://www.wkoecg.at/WEB/Ecg.aspx?FirmaID=d47bddb7-e386-4c13-88c5-2fb80722752d';
const DATA_PRIVACY_LINK = 'https://www.pcode.at/datenschutz/Datenschutz.pdf';
const AGB_LINK = 'https://www.pcode.at/agb/AGB.pdf';
