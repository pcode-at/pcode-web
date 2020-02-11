import React from 'react';
import { Color } from '../Color.enum';
import { Text } from 'rebass';
import { theme } from '../theme';

export enum FontStyle {
    Normal = 'normal',
    Light = 'light',
}

type TCopyTextProps = {
    color: Color;
    fontStyle?: FontStyle;
};

export const CopyText: React.FC<TCopyTextProps> = ({
    children,
    color,
    fontStyle = FontStyle.Normal,
}) => {
    // write some code

    return (
        <Text
            color={color}
            fontFamily={theme.font[fontStyle].fontFamily}
            fontWeight={theme.font[fontStyle].fontWeight}
        >
            {children}
        </Text>
    );
};
