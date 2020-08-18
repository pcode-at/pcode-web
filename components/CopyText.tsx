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
    fontStyle: FontStyle;
    className?: string;
};

export const CopyText: React.FC<TCopyTextProps> = ({
    children,
    color,
    fontStyle,
    className,
}) => {
    return (
        <div className={className}>
            <Text
                color={color}
                fontFamily={theme.font[fontStyle].fontFamily}
                fontWeight={theme.font[fontStyle].fontWeight}
            >
                {children}
            </Text>
        </div>
    );
};
