import React from 'react';
import { theme } from '../theme';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';
import { Color } from '../Color.enum';

type MultiColorHeadline = {
    leftAndRightTextColor: Color;
    middleTextColor: Color;
    leftText: string;
    middleText: string;
    rightText: string;
    fontSize: string;
    className?: string;
};

export const MultiColorHeadline: React.FC<MultiColorHeadline> = ({
    leftAndRightTextColor,
    middleTextColor,
    leftText,
    middleText,
    rightText,
    fontSize,
    className,
}) => {
    const MultiColorHeadlineLayout = styled.div`
        width: 100%;
        padding: 2rem 0;
    `;
    const MultiColorTextLayout = styled.div`
        display: flex;
        justify-content: center;
    `;
    const StyledHeading = styled.h1`
        font-family: ${theme.font.normal.fontFamily};
        text-align: center;
        font-size: ${fontSize};
        font-weight: ${theme.font.normal.fontWeight};
    `;

    return (
        <div className={className}>
            <MultiColorHeadlineLayout>
                <StyledHeading className="multi-color-headline">
                    <MultiColorTextLayout>
                        <Text color={leftAndRightTextColor}>{leftText}</Text>
                        &nbsp;
                        <Text color={middleTextColor}>{middleText}</Text>
                        &nbsp;
                        <Text color={leftAndRightTextColor}>{rightText}</Text>
                    </MultiColorTextLayout>
                </StyledHeading>
            </MultiColorHeadlineLayout>
        </div>
    );
};
