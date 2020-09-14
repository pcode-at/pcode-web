import React from 'react';
import { Color } from '../Color.enum';
import { Box, Text, Button } from 'rebass';
import { theme } from '../theme';
import { CONSTANTS } from '../shared/constants';
import styled from 'styled-components';

type Props = {
    logoSvgSources: string[];
    selectedCompanyIndex: number;
    selectCompany(index: number): void;
    className?: string;
};

export const QuotedCompanies: React.FC<Props> = ({
    logoSvgSources,
    selectedCompanyIndex,
    selectCompany,
    className,
}) => {
    const [companyIndex, setCompanyIndex] = React.useState(
        selectedCompanyIndex,
    );

    let items = [];

    const updateIndex = index => {
        getCodeOfCompanyIndex(index);
        selectCompany(index);
        setCompanyIndex(index);
    };

    function getCodeOfCompanyIndex(selectedIndex) {
        logoSvgSources.forEach((svgSource, index) => {
            let color = index == selectedIndex ? Color.Secondary : Color.White;

            const SvgBoxPadding = styled(Box)`
                padding: 2% 6%;
                height: ${100 / logoSvgSources.length}vw;
                width: ${100 / logoSvgSources.length}vw;
            `;

            const StyledSvgButton = styled(Button)`
                font-family: ${theme.font.normal.fontFamily}, serif;
                background-color: ${theme.colors[color]};
                mask: url(${svgSource});
                mask-position: center;
                mask-repeat: no-repeat;
                mask-size: 100%;
                height: 100%;
                width: 100%;
                cursor: pointer;
                outline: none;
            `;
            items[index] = (
                <SvgBoxPadding>
                    <StyledSvgButton
                        onClick={() => updateIndex(index)}
                        backgroundColor={theme.colors[color]}
                    ></StyledSvgButton>
                </SvgBoxPadding>
            );
        });
    }

    const QuotedCompaniesBackground = styled(Box)`
        background-color: ${theme.colors[Color.Secondary2]};
        height: 100%;
    `;

    const QuotedCompaniesLayout = styled(Box)`
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0 3%;
        height: 100%;
    `;

    if (!items.length) {
        getCodeOfCompanyIndex(companyIndex);
    }

    return (
        <div className={className}>
            <QuotedCompaniesBackground>
                <QuotedCompaniesLayout>{items}</QuotedCompaniesLayout>
            </QuotedCompaniesBackground>
        </div>
    );
};
