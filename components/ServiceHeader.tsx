import React from 'react';
import { theme } from '../theme';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';
import { Color } from '../Color.enum';
import { ActionButton } from '../components/ActionButton';

type Props = {
    leftText: string;
    rightText: string;
    leftTextColor: Color;
    rightTextColor: Color;
    buttonLabel: string;
    buttonFn?(): void;
    buttonColor: Color;
    backgroundColor: Color;
    className?: string;
};

export const ServiceHeader: React.FC<Props> = ({
    leftText,
    rightText,
    leftTextColor,
    rightTextColor,
    buttonLabel,
    buttonFn = () => {},
    buttonColor,
    backgroundColor,
    className,
}) => {
    const ServiceHeaderContentLayout = styled.div`
        display: inline-block;
        width: 50vw;
        padding: 4rem 5rem;
        box-sizing: border-box;
    `;

    const ServiceHeaderBackground = styled.div`
        background-color: ${theme.colors[backgroundColor]};
    `;

    const FirstText = styled.span`
        color: ${theme.colors[leftTextColor]};
        font-size: 49px;
        font-family: ${theme.font.normal.fontFamily};
    `;

    const SecondText = styled.span`
        color: ${theme.colors[rightTextColor]};
        font-size: 49px;
        font-family: ${theme.font.normal.fontFamily};
    `;
    return (
        <div className={className}>
            <ServiceHeaderBackground>
                <ServiceHeaderContentLayout>
                    <Text>
                        <FirstText>{leftText}&nbsp;</FirstText>
                        <SecondText>{rightText}</SecondText>
                        <ActionButton
                            className="service-header-button"
                            label={buttonLabel}
                            color={buttonColor}
                            onClick={buttonFn}
                        />
                    </Text>
                </ServiceHeaderContentLayout>
            </ServiceHeaderBackground>

            <style>{`
            .service-header-button {
                display: inline-block;
                padding: 15px 50px;
                vertical-align: top;
            }
            `}</style>
        </div>
    );
};
