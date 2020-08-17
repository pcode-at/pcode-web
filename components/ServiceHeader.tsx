import React from 'react';
import { theme } from '../theme';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';
import { Color } from '../Color.enum';
import { ActionButton } from '../components/ActionButton';
import { MultiColorHeadline } from '../components/MultiColorHeadline';

type TServiceHeaderProps = {
    leftText: string;
    rightText: string;
    leftTextColor: Color;
    rightTextColor: Color;
    buttonLabel: string;
    buttonFn?(): void;
    buttonColor: Color;
    buttonNoBackground: boolean;
    backgroundColor: Color;
    className?: string;
};

export const ServiceHeader: React.FC<TServiceHeaderProps> = ({
    leftText,
    rightText,
    leftTextColor,
    rightTextColor,
    buttonLabel,
    buttonFn,
    buttonColor,
    buttonNoBackground,
    backgroundColor,
    className,
}) => {
    const ServiceHeaderContentLayout = styled.div`
        display: inline-block;
        width: 50vw;
        padding: 10%;
        box-sizing: border-box;
    `;

    const ServiceHeaderBackground = styled.div`
        background-color: ${theme.colors[backgroundColor]};
    `;
    return (
        <div className={className}>
            <ServiceHeaderBackground>
                <ServiceHeaderContentLayout>
                    <MultiColorHeadline
                        className="service-header-headline"
                        leftAndRightTextColor={leftTextColor}
                        middleTextColor={rightTextColor}
                        leftText={leftText}
                        middleText={rightText}
                        rightText={''}
                    ></MultiColorHeadline>
                </ServiceHeaderContentLayout>
            </ServiceHeaderBackground>
        </div>
    );
};
