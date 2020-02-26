import { Text as RebassText } from 'rebass';
import React from 'react';
import styled from 'styled-components';
import { Color } from '../../Color.enum';
import { theme } from '../../theme';

export enum FontStyle {
    Normal = 'normal',
    Light = 'light',
}

type TTextProps = {
    color: Color;
    fontStyle: FontStyle;
    className?: string;
};

export const Text: React.FC<TTextProps> = ({
    children,
    color,
    fontStyle,
    className,
}) => {
    const StyledRebassText = styled(RebassText)`
        width: 100%;
        border-radius: 15px;
        cursor: pointer;
    `;

    return (
        <div className={className}>
            <StyledRebassText
                color={color}
                fontFamily={theme.font[fontStyle].fontFamily}
                fontWeight={theme.font[fontStyle].fontWeight}
            >
                {children}
            </StyledRebassText>
        </div>
    );
};
