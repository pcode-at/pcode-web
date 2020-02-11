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
    className?: string;
    fontStyle?: FontStyle;
};

export const CopyText: React.FC<TCopyTextProps> = ({
    children,
    color,
    className
}) => {

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
