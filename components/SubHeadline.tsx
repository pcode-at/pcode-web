import React from 'react';
import { Color } from '../Color.enum';
import { FontStyle, Text } from '../shared/components/Text';

type TSubHeadlineProps = {
    color: Color;
    fontStyle: FontStyle;
    className?: string;
};

export const SubHeadline: React.FC<TSubHeadlineProps> = ({
    children,
    color,
    fontStyle,
    className,
}) => {
    return (
        <div className={className}>
            <Text fontStyle={fontStyle} color={color}>
                {children}
            </Text>
        </div>
    );
};
