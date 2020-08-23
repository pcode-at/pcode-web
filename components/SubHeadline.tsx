import React from 'react';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';

type Props = {
    color: Color;
    fontStyle: FontStyle;
    className?: string;
};

export const SubHeadline: React.FC<Props> = ({
    children,
    color,
    fontStyle,
    className,
}) => {
    return (
        <div className={className}>
            <CopyText fontStyle={fontStyle} color={color}>
                {children}
            </CopyText>
        </div>
    );
};
