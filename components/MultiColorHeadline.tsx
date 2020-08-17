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
    className?: string;
};

export const MultiColorHeadline: React.FC<MultiColorHeadline> = ({
    leftAndRightTextColor,
    middleTextColor,
    leftText,
    middleText,
    rightText,
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

    return (
        <div className={className}>
            <MultiColorHeadlineLayout>
                <Heading
                    fontFamily={theme.font.normal.fontFamily}
                    className="multi-color-headline"
                    textAlign="center"
                    fontSize="600%"
                    fontWeight={theme.font.normal.fontWeight}
                >
                    <MultiColorTextLayout>
                        <Text color={leftAndRightTextColor}>{leftText}</Text>
                        &nbsp;
                        <Text color={middleTextColor}>{middleText}</Text>
                        &nbsp;
                        <Text color={leftAndRightTextColor}>{rightText}</Text>
                    </MultiColorTextLayout>
                </Heading>
            </MultiColorHeadlineLayout>
        </div>
    );
};
