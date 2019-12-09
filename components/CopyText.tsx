import React from 'react';
import { Color } from '../Color.enum';
import { Text } from 'rebass';

type TCopyTextProps = {
    color: Color;
};

export const CopyText: React.FC<TCopyTextProps> = ({ children, color }) => {
    // write some code

    return (
        <Text color={color} fontFamily="raleway" fontWeight={300}>
            {children}
        </Text>
    );
};
