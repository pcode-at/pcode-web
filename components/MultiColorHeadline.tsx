import React from 'react';
import { theme } from '../theme';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';
import { DeprecatedColor } from '../Color.enum';

type Props = {
    leftAndRightTextColor: DeprecatedColor;
    middleTextColor: DeprecatedColor;
    leftText: string;
    middleText: string;
    rightText: string;
    className?: string;
    variant: 'Small' | 'Normal' | 'Big';
};

export const MultiColorHeadline: React.FC<Props> = ({
    leftAndRightTextColor,
    middleTextColor,
    leftText,
    middleText,
    rightText,
    className,
    variant,
}) => {
    const variantProps = {
        fontSize: '300%',
    };

    if (variant == 'Big') {
        variantProps.fontSize = '600%';
    } else if (variant == 'Normal') {
        variantProps.fontSize = '450%';
    }

    const MultiColorHeadlineLayout = styled.div`
        width: 100%;
        padding: 2rem 0;
    `;
    const MultiColorTextLayout = styled.div`
        display: flex;
        justify-content: center;
    `;
    const StyledHeading = styled.h1`
        font-family: ${theme.Font.Default};
        text-align: center;
        font-size: ${variantProps.fontSize};
        font-weight: ${'$regular'};
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
