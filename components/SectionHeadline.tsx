import React from 'react';
import { theme } from '../theme';
import { DeprecatedColor } from '../Color.enum';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';

type Props = {
    color: DeprecatedColor;
    headlinePartOne: string;
    headlinePartTwo: string;
    separateWithBreak?: boolean;
    maxWidthPartTwo?: string;
    className?: string;
};

export const SectionHeadline: React.FC<Props> = ({
    headlinePartOne,
    headlinePartTwo,
    color,
    separateWithBreak = false,
    maxWidthPartTwo,
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

    return (
        <div className={className}>
            <Heading fontFamily={theme.Font.Default} color={color}>
                <FirstSpan>{headlinePartOne}</FirstSpan>
                &nbsp;
                {separateWithBreak && <br />}
                <SecondSpanLayout>
                    <SecondSpanStyle>{headlinePartTwo}</SecondSpanStyle>
                </SecondSpanLayout>
            </Heading>
        </div>
    );
};
