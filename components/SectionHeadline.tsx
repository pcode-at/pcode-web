import React from 'react';
import { Color } from '../Color.enum';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';
import { theme } from '../theme';

type Props = {
    color: Color;
    headlinePartOne: string;
    headlinePartTwo: string;
    separateWithBreak?: boolean;
    maxWidthPartTwo?: string;
    variant?: 'Normal' | 'Big';
    className?: string;
};

export const SectionHeadline: React.FC<Props> = ({
    headlinePartOne,
    headlinePartTwo,
    color,
    separateWithBreak = false,
    maxWidthPartTwo,
    variant = 'Normal',
    className,
}) => {
    const defaultProps = {
        color,
        fontFamily: 'raleway',
        display: 'inline',
    };

    const FirstSpan = styled.span`
        font-weight: 500;
    `;

    const SecondSpanLayout = styled.span`
        display: ${maxWidthPartTwo ? 'block' : 'inline'};
        max-width: ${maxWidthPartTwo};
    `;

    const SecondSpanStyle = styled.span`
        font-weight: 300;
    `;

    const HeadingDesign = styled.h1`
        ${variant == 'Big' ? 'font-size: 40px' : 'font-size: 24px'};
        font-family: 'raleway';
        color: ${theme.colors[color]};
    `;

    return (
        <div className={className}>
            <HeadingDesign>
                <FirstSpan>{headlinePartOne}</FirstSpan>
                &nbsp;
                {separateWithBreak && <br />}
                <SecondSpanLayout>
                    <SecondSpanStyle>{headlinePartTwo}</SecondSpanStyle>
                </SecondSpanLayout>
            </HeadingDesign>
        </div>
    );
};
