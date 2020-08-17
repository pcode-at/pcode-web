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
    return (
        <div className="multi-color-headline-box">
            <Heading
                fontFamily={theme.font.normal.fontFamily}
                className={"multi-color-headline " + className}
                width="100%"
                textAlign="center"
                padding="2rem 0"
                fontSize="600%"
                fontWeight= {theme.font.normal.fontWeight}
            >
                <Text color={leftAndRightTextColor}>{leftText}</Text>
                &nbsp;
                <Text color={middleTextColor}>{middleText}</Text>
                &nbsp;
                <Text color={leftAndRightTextColor}>{rightText}</Text>
            </Heading>
            <style>{`
                .multi-color-headline *{
                    display: inline-block;
                }
                `}
            </style>
        </div>
    );
};
