import React from 'react';
import { Color } from '../Color.enum';
import { Text } from 'rebass';

type TCopyTextProps = {
    color: Color;
    className?: string;
};

export const CopyText: React.FC<TCopyTextProps> = ({
    children,
    color,
    className
}) => {

    return (
        <div className={className}>
            <Text color={color} fontFamily="raleway" fontWeight={300}>
                {children}
            </Text>
        </div>
    );
};
