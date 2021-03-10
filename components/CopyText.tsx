import React from 'react';
import { Color } from '../Color.enum';
import { Text } from 'rebass';
import { theme } from '../themeDeprecated';

export enum FontStyle {
    Normal = 'normal',
    Light = 'light',
}

type Props = {
    color: Color;
    fontStyle: FontStyle;
    className?: string;
};

export const CopyText: React.FC<Props> = ({
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
