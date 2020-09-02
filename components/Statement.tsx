import React from 'react';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import styled, { css, breakpoints } from '@xstyled/styled-components';
import { PersonWithFunction } from './PersonWithFunction';

type Props = {
    personName: string;
    personPosition: string;
    color?: Color;
    backgroundColor?: Color;
    pCodeShapeColor?: Color;
    className?: string;
    imagePath: string;
};

export const Statement: React.FC<Props> = ({
    children,
    personName,
    personPosition,
    color = Color.White,
    backgroundColor = Color.Secondary2,
    imagePath,
    className,
}) => {
    const Wrapper = styled.div(
        breakpoints({
            allDevices: css`
                align-items: center;
                background-color: ${theme.colors[backgroundColor]};
                display: flex;
                flex-direction: column;
                padding-bottom: large;
                padding-top: large;
            `,
            tablet: css`
                flex-direction: row;
                justify-content: center;
            `,
        }),
    );

    const TextWrapper = styled.div(
        breakpoints({
            allDevices: css`
                color: ${color};
                font-family: light;
                font-size: headline4;
                font-weight: normal;
                margin-left: extraLarge;
                margin-right: extraLarge;
                padding: 0;
                text-align: center;
                width: 90%;
            `,
            tablet: css`
                margin: initial;
                font-size: headline3;
                padding: large medium large ultraLarge;
                text-align: initial;
                width: 70%;
            `,
        }),
    );

    const StyledPersonFlex = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    return (
        <div className={className}>
            <Wrapper backgroundColor={backgroundColor}>
                <TextWrapper>
                    <p>{children}</p>
                </TextWrapper>

                <StyledPersonFlex>
                    <PersonWithFunction
                        color={Color.Secondary}
                        personName={personName}
                        personPosition={personPosition}
                        imagePath={imagePath}
                    />
                </StyledPersonFlex>
            </Wrapper>
        </div>
    );
};
