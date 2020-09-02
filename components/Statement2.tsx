import React from 'react';
import { Color } from '../Color.enum';
import styled, { css, breakpoints } from '@xstyled/styled-components';
import { PersonWithFunction } from './PersonWithFunction';

type Props = {
    personName: string;
    personPosition: string;
    color: Color;
    width?: string;
    className?: string;
    imagePath: string;
};

export const Statement2: React.FC<Props> = ({
    children,
    personName,
    personPosition,
    color = Color.Primary,
    imagePath,
    className,
}) => {
    const Wrapper = styled.div(
        breakpoints({
            allDevices: css`
                align-items: center;
                display: flex;
                flex-direction: column;
                padding-bottom: large;
                padding-top: large;
            `,
            tablet: css`
                flex-direction: row;
                justify-content: space-between;
            `,
        }),
    );

    const TextWrapper = styled.div(
        breakpoints({
            allDevices: css`
                color: ${color};
                font-family: light;
                font-size: headline5;
                font-weight: normal;
                margin-left: large;
                margin-right: large;
                padding: 0;
                text-align: center;
                width: 90%;
            `,
            tablet: css`
                font-size: headline4;
                margin: initial;
                padding: large;
                width: 70%;
            `,
        }),
    );

    const PersonWrapper = styled.div(
        breakpoints({
            allDevices: css`
                display: flex;
                justify-content: center;
            `,
            tablet: css`
                margin-right: large;
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
            <Wrapper>
                <TextWrapper>
                    <p>{children}</p>
                </TextWrapper>

                <PersonWrapper>
                    <StyledPersonFlex>
                        <PersonWithFunction
                            color={color}
                            personName={personName}
                            personPosition={personPosition}
                            imagePath={imagePath}
                        />
                    </StyledPersonFlex>
                </PersonWrapper>
            </Wrapper>
        </div>
    );
};
