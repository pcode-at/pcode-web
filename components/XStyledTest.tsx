import React from 'react';
import { Color } from '../Color.enum';
import styled from '@xstyled/styled-components';
import { theme } from '../theme';


export enum FontStyle {
    Normal = 'normal',
    Light = 'light',
}

type Props = {
    color: Color;
    fontStyle?: FontStyle;
    className?: string;
};

export const XStyled: React.FC<Props> = ({
    children,
    color,
    fontStyle,
    className,
}) => {
    const StyledText = styled.p`
        color: ${color};
        text-align: center;
    `;

    const TextLayout = styled.div`
        width: 100%;
        height: 10vh;
    `;

    const SecondText = styled.p`
        width: 100%;
        text-align: center;
        margin-top: l;
    `;
    return (
        <div className={className}>
            <TextLayout>
                <StyledText>{children}</StyledText>
                <SecondText>Hello World</SecondText>
            </TextLayout>
        </div>
    );
};
