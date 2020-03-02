import React from 'react';
import { Color } from '../Color.enum';
import { Text } from '../shared/components/Text';

type TSubHeadlineProps = {
    color: Color;
    className?: string;
};

export const SubHeadline: React.FC<TSubHeadlineProps> = ({
    children,
    color,
    className,
}) => {
    return (
        <div className={className}>
            <Text color={color} variant={'normal'}>
                {children}
            </Text>
        </div>
    );
};
